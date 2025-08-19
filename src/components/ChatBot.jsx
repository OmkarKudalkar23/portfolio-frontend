import React, { useEffect, useRef, useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const chatBoxRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Scroll chat box to bottom whenever chat updates
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    // Add user message
    setChat((prev) => [...prev, { sender: "User", text: input }]);
    setInput("");

    try {
      const res = await fetch("https://portfolio-backend-sovq.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, { sender: "Omkar", text: data.answer }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [...prev, { sender: "Omkar", text: "Sorry, something went wrong." }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: -220, width: "300px", fontFamily: "Poppins, sans-serif", zIndex: 1000 }}>
      {!isOpen && (
        <button
          onClick={toggleChat}
          style={{
            background: "#0ff",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            border: "none",
            cursor: "pointer",
            fontSize: "30px",
            color: "#000",
            boxShadow: "0 0 10px #0ff",
          }}
        >
          💬
        </button>
      )}

      {isOpen && (
        <div
          style={{
             position: "absolute",
        bottom: "10px", // push above the button
        right: -57,       // stick to button’s right edge
        transform: "translateX(-100%)", // expand to the left
        width: "300px",
        background: "rgba(20,20,35,0.95)",
        border: "2px solid #0ff",
        borderRadius: "15px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px",
              background: "linear-gradient(90deg, #0ff, #ff00ff)",
              color: "#fff",
               borderTopLeftRadius: "13px",
               borderTopRightRadius: "13px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Omkar the Bot
            <button
              onClick={toggleChat}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Scrollable Chat Box */}
          <div
            ref={chatBoxRef}
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
               borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {chat.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === "User" ? "flex-end" : "flex-start",
                  background: msg.sender === "User" ? "#09eae3" : "#00ffff",
                  color: msg.sender === "User" ? "#fff" : "#000",
                  borderRadius: "15px",
                  padding: "8px",
                  maxWidth: "80%",
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSubmit} style={{ display: "flex", borderTop: "1px solid #0ff" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Omkar..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#0ff",
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #0ff, #ff00ff)",
                border: "none",
                color: "#fff",
                 borderBottomRightRadius: "14px",
                fontWeight: "bold",
                padding: "0 15px",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}