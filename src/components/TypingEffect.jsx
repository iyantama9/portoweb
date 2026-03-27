import { useState, useEffect } from "react";

const TypingEffect = ({ text, onComplete, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let ticker;
    if (displayText.length < text.length) {
      ticker = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, speed);
    } else {
      if (onComplete) onComplete();
    }
    return () => clearTimeout(ticker);
  }, [text, displayText, speed, onComplete]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
