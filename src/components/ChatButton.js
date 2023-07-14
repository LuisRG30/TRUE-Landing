import { useState, useRef } from 'react';
import './ChatButton.css';

import useWebSocket from "react-use-websocket";

const web_token = "arribaelatlas";
const serviceURL = "anotherai.azurewebsites.net/"

const ChatButton = () => {
  const [value, setValue] = useState("");
  const [ previousChats, setPreviousChats] = useState([]);
  const [isChatOpen, setChatOpen] = useState(false);

  const [converesationName, setConversationName] = useState(
    JSON.parse(localStorage.getItem("anonymous") || `{"conversationName": "${(Math.random() + 1).toString(36).substring(7)}"}`).conversationName
  )

  const ref = useRef(null);

  const handleButtonClick = () => {
    setChatOpen(!isChatOpen);
  };

  const handleCloseClick = () => {
    setChatOpen(false);
  };

  

  const { sendJsonMessage } = useWebSocket(
    `wss://${serviceURL}anonymous/?web_token=${web_token}&conversation_name=${converesationName}`,
    {
      onOpen: () => console.log("opened"),
      shouldReconnect: (closeEvent) => true,
      onMessage: (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
          case "chat_message_echo":
            setPreviousChats([...previousChats, data.message]);
            ref.current.scrollIntoView({ behavior: "smooth" })
            break;
          case "last_messages":
            const conv = data.conversation_name
            setConversationName(conv)
            localStorage.setItem("anonymous", JSON.stringify({converesationName: conv}))
            setPreviousChats([...data.messages.reverse()]);
            ref.current.scrollIntoView({ behavior: "smooth" })
            break;
          default:
            break;
        }
      },
    }
  );

  const handleSendMessage = () => {
    if (value.trim() !== '') {
      sendJsonMessage({
        type: "chat_message",
        message: value,
      })
    }
    setValue("");
  };

  return (
    <div className={`chat-button ${isChatOpen ? 'open' : ''}`}>
      {isChatOpen ? (
        <div className="chat-window">
          <div className="feed" >
            {previousChats.map((chatMessage, index) => (
              <li key={index} className={`chat-message ${chatMessage.from_user.profile.Anonymous ? 'sent' : 'received'}`}>
                <p>{chatMessage.message}</p>
              </li>
            ))}
          </div>

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="chat-input"
          />
          <button className="send-button" onClick={handleSendMessage}>
            Enviar
          </button>
          <button className="close-button" onClick={handleCloseClick}>
            X
          </button>
        </div>
      ) : (
        <button className="open-button" onClick={handleButtonClick}>
          Abrir Chatbot
        </button>
      )}
    </div>
  );
};

export default ChatButton;
