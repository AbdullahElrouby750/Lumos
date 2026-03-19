import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';
import style from './ChatWidget.module.css';

const BACKEND_URL = import.meta.env.VITE_CHATBOT_URL;

/**
 * ChatWidget
 * Floating chat widget component with message history
 * - Floating bubble button (fixed to bottom-right)
 * - Chat window (opens/closes with animation)
 * - Handles all chat logic and API communication
 * - Maintains conversation history with backend
 */
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'lumo',
        text: "Hi! I'm LUMO 👋 — Lumos's AI assistant. Ask me anything about our products, pricing, or the Nova team!"
      }]);
    }
  }, [isOpen]);

  /**
   * Send message to backend and handle response
   */
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message to UI immediately
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage, 
          history 
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Add LUMO response
      setMessages(prev => [...prev, { 
        role: 'lumo', 
        text: data.reply 
      }]);

      // Update history for next request
      setHistory(data.updatedHistory);

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'lumo',
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle Enter key to send message
   * Shift+Enter for new line
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Bubble Button */}
      <motion.button
        className={style.bubble}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={!isOpen ? { repeat: Infinity, duration: 2, ease: 'easeInOut' } : {}}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'bottom right' }}
          >
            <ChatWindow
              messages={messages}
              input={input}
              isLoading={isLoading}
              onInputChange={setInput}
              onSend={sendMessage}
              onClose={() => setIsOpen(false)}
              onKeyPress={handleKeyPress}
              messagesEndRef={messagesEndRef}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
