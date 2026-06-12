import React from "react";

/** Typewriter text effect with blinking cursor; supports looping arrays. */
export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className = "",
  style,
}) {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [textArrayIndex, setTextArrayIndex] = React.useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  React.useEffect(() => {
    if (!currentText) return;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText((prev) => prev + currentText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (loop) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setTextArrayIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentText, loop, speed, deleteSpeed, delay, displayText]);

  return (
    <span className={className} style={style}>
      {displayText}
      <span style={{ animation: "fs-cursor-pulse 1s cubic-bezier(0.4,0,0.6,1) infinite" }}>{cursor}</span>
      <style>{`@keyframes fs-cursor-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </span>
  );
}
