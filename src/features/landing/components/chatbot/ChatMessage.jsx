import style from './ChatWidget.module.css';

/**
 * ChatMessage
 * Single message bubble component with markdown and RTL support
 * - Handles **bold** text
 * - Handles \n line breaks
 * - Handles bullet points (* and - lists)
 * - Handles Arabic (RTL) and English (LTR) text properly
 * - Auto-detects language direction
 */
export function ChatMessage({ role, text }) {
  const isUser = role === 'user';

  /**
   * Detect if text contains Arabic characters
   */
  const isArabic = (str) => {
    const arabicRegex = /[\u0600-\u06FF]/g;
    return arabicRegex.test(str);
  };

  /**
   * Determine text direction based on content
   */
  const getTextDirection = (rawText) => {
    if (!rawText) return 'ltr';
    
    // Count Arabic vs English characters
    const arabicChars = (rawText.match(/[\u0600-\u06FF]/g) || []).length;
    const latinChars = (rawText.match(/[a-zA-Z]/g) || []).length;
    
    // If more Arabic than Latin, use RTL
    if (arabicChars > latinChars) {
      return 'rtl';
    }
    return 'ltr';
  };

  /**
   * Parse markdown text and convert to React elements
   * Supports:
   * - **bold** text
   * - \n line breaks
   * - * bullet points
   * - Numbered lists
   * - Arabic and English mixed text (bidirectional)
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
                const bulletDirection = isArabic(bulletText) ? 'rtl' : 'ltr';
                return (
                  <div 
                    key={lineIndex} 
                    className={style.bulletItem}
                    dir={bulletDirection}
                  >
                    <span className={style.bullet}>•</span>
                    <span>{bulletText}</span>
                  </div>
                );
              }

              // Numbered lists: 1. 2. 3. etc
              if (/^\d+\./.test(line.trim())) {
                const numberedText = line.trim().replace(/^\d+\.\s*/, '');
                const numberedDirection = isArabic(numberedText) ? 'rtl' : 'ltr';
                return (
                  <div 
                    key={lineIndex} 
                    className={style.numberedItem}
                    dir={numberedDirection}
                  >
                    {numberedText}
                  </div>
                );
              }

              // Regular text
              const textDirection = isArabic(line) ? 'rtl' : 'ltr';
              return (
                <div 
                  key={lineIndex} 
                  className={style.textLine}
                  dir={textDirection}
                >
                  {line}
                </div>
              );
            })}
          </div>
        );
      }

      // Regular text without special formatting
      const textDirection = isArabic(part) ? 'rtl' : 'ltr';
      return (
        <span key={index} dir={textDirection}>
          {part}
        </span>
      );
    });
  };

  const textDirection = getTextDirection(text);

  return (
    <div className={`${style.messageRow} ${isUser ? style.userRow : style.lumoRow}`}>
      <div 
        className={`${style.messageBubble} ${isUser ? style.userMessage : style.lumoMessage}`}
        dir={textDirection}
      >
        <div className={style.messageContent}>
          {parseMarkdown(text)}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;