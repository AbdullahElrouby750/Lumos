import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Agent_AI_Avatar from '../../../../assets/Agent_AI_Avatar.svg';
import style from './ChatWidget.module.css';

/**
 * ChatWindow
 * The main chat window UI component
 * - Header with LUMO avatar and close button
 * - Messages area with auto-scroll
 * - Input field with send button
 * - Typing indicator when loading
 */
export function ChatWindow({
  messages,
  input,
  isLoading,
  onInputChange,
  onSend,
  onClose,
  onKeyPress,
  messagesEndRef
}) {
  return (
    <div className={style.chatWindow}>
      {/* Header */}
      <div className={style.header}>
        <div className={style.headerContent}>
          <img src={Agent_AI_Avatar} alt="LUMO" className={style.avatar}  loading="lazy"/>
          <div className={style.headerText}>
            <h3 className={style.headerTitle}>LUMO</h3>
            <div className={style.onlineStatus}>
              <span className={style.onlineDot} />
              <span className={style.onlineText}>Online</span>
            </div>
          </div>
        </div>
        <button
          className={style.closeBtn}
          onClick={onClose}
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className={style.messagesContainer}>
        {messages.length === 0 ? (
          <div className={style.emptyState}>
            <p>Start a conversation with LUMO</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatMessage role={message.role} text={message.text} />
            </motion.div>
          ))
        )}

        {/* Typing Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={style.typingIndicator}
          >
            <div className={style.typingDot} />
            <div className={style.typingDot} />
            <div className={style.typingDot} />
          </motion.div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        onKeyPress={onKeyPress}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ChatWindow;
