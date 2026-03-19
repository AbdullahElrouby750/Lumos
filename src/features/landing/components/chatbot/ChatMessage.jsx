import style from './ChatWidget.module.css';

/**
 * ChatMessage
 * Single message bubble component with markdown support
 * - Handles **bold** text
 * - Handles \n line breaks
 * - Handles bullet points (* and - lists)
 * - Handles numbered lists
 * - User messages: right-aligned, orange background
 * - LUMO messages: left-aligned, dark background
 */
export function ChatMessage({ role, text }) {
  const isUser = role === 'user';

  /**
   * Parse markdown text and convert to React elements
   * Supports:
   * - **bold** text
   * - \n line breaks
   * - * bullet points
   * - Numbered lists
   */
  const parseMarkdown = (rawText) => {
    if (!rawText) return null;

    // Split by double asterisks for bold text, preserve the delimiters
    const parts = rawText.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
      // Handle bold text: **text** → <strong>text</strong>
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className={style.boldText}>
            {boldText}
          </strong>
        );
      }

      // Handle line breaks and list items
      if (part.includes('\n')) {
        const lines = part.split('\n');
        return (
          <div key={index}>
            {lines.map((line, lineIndex) => {
              // Empty lines
              if (!line.trim()) {
                return <div key={lineIndex} className={style.spacer} />;
              }

              // Bullet points: * or -
              if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
                const bulletText = line.trim().slice(1).trim();
                return (
                  <div key={lineIndex} className={style.bulletItem}>
                    <span className={style.bullet}>•</span>
                    <span>{bulletText}</span>
                  </div>
                );
              }

              // Numbered lists: 1. 2. 3. etc
              if (/^\d+\./.test(line.trim())) {
                const numberedText = line.trim().replace(/^\d+\.\s*/, '');
                return (
                  <div key={lineIndex} className={style.numberedItem}>
                    {numberedText}
                  </div>
                );
              }

              // Regular text
              return (
                <div key={lineIndex} className={style.textLine}>
                  {line}
                </div>
              );
            })}
          </div>
        );
      }

      // Regular text without special formatting
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={`${style.messageRow} ${isUser ? style.userRow : style.lumoRow}`}>
      <div className={`${style.messageBubble} ${isUser ? style.userMessage : style.lumoMessage}`}>
        <div className={style.messageContent}>
          {parseMarkdown(text)}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;