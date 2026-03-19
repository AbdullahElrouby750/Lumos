import { Send } from 'lucide-react';
import style from './ChatWidget.module.css';

/**
 * ChatInput
 * Input field and send button component
 * - Text input with orange border on focus
 * - Send button with icon
 * - Disabled state when loading
 * - Supports Enter to send, Shift+Enter for new line
 */
export function ChatInput({
  value,
  onChange,
  onSend,
  onKeyPress,
  isLoading
}) {
  return (
    <div className={style.inputContainer}>
      <textarea
        className={style.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Ask LUMO anything..."
        disabled={isLoading}
        rows={1}
        style={{ resize: 'none', overflow: 'hidden' }}
      />
      <button
        className={style.sendBtn}
        onClick={onSend}
        disabled={isLoading || !value.trim()}
        aria-label="Send message"
      >
        <Send size={18} />
      </button>
    </div>
  );
}

export default ChatInput;
