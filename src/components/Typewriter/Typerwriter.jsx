import React, { useState, useEffect } from 'react';

const Typewriter = ({ textArray, loop }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      const currentWord = textArray[currentIndex];
      const typingSpeed = 30; // Faster typing speed of 30ms
      const erasingSpeed = 30; // Faster erasing speed of 30ms

      if (!isDeleting && currentText.length < currentWord.length) {
        // Typing the word character by character
        setCurrentText((prevText) => currentWord.slice(0, prevText.length + 1));
        timeout = setTimeout(animateText, typingSpeed);
      } else if (isDeleting && currentText.length > 0) {
        // Erasing the text character by character
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        timeout = setTimeout(animateText, erasingSpeed);
      } else {
        if (!isDeleting && (loop || currentIndex + 1 < textArray.length)) {
          // Delay before erasing the text
          setIsDeleting(true);
          timeout = setTimeout(() => {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            animateText(); // Start typing the next word immediately
          }, 100);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          animateText(); // Start typing the next word immediately
        }
      }
    };

    timeout = setTimeout(animateText, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentText, currentIndex, isDeleting, loop, textArray]);

  return <span>{currentText}</span>;
};

export default Typewriter;
