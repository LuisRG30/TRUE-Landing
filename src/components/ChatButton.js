import { useState } from 'react';
import './ChatButton.css';

const ChatButton = () => {
  const [value, setValue] = useState("");
  const [ previousChats, setPreviousChats] = useState([]);
  const [isChatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("")

  const handleButtonClick = () => {
    setChatOpen(!isChatOpen);
  };

  const handleCloseClick = () => {
    setChatOpen(false);
  };

  const handleSendMessage = () => {
    if (value.trim() !== '') {
      const newMessage = {
        role: 'user',
        content: value,
      };
      setPreviousChats([...previousChats, newMessage]);
      setValue('');
      setMessage({ role: 'bot', content: 'Ejemplo de respuesta del bot' }); // Ejemplo de respuesta del bot
    }
  };

    const currentChat = previousChats.filter(previousChat => previousChat.title === "Chat" );

  return (
    <div className={`chat-button ${isChatOpen ? 'open' : ''}`}>
      {isChatOpen ? (
        <div className="chat-window">
          <div className="feed">
            {currentChat.map((chatMessage, index) => (
              <li key={index} className={`chat-message ${chatMessage.role === 'user' ? 'sent' : 'received'}`}>
                <p>{chatMessage.content}</p>
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
