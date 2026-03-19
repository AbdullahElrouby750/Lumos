import style from './ChatWidget.module.css';

/**
 * ChatMessage
 * Single message bubble component
 * - User messages: right-aligned, orange background
 * - LUMO messages: left-aligned, dark background
 */
export function ChatMessage({ role, text }) {
  const isUser = role === 'user';

  return (
    <div className={`${style.messageRow} ${isUser ? style.userRow : style.lumoRow}`}>
      <div className={`${style.messageBubble} ${isUser ? style.userMessage : style.lumoMessage}`}>
        <p className={style.messageText}>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
