import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = " I am a Software Developer";
    const duration = 0.3; // Typing speed (seconds per character)
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // Loop indefinitely with a slight pause

    // Split text and animate typing
    text.split('').forEach((_, index) => {
      tl.to(textRef.current, {
        textContent: text.substring(0, index + 1),
        duration: duration,
        ease: 'power1.inOut', // Smoother easing
      });
    });

    // Clear text at the end of the animation
    tl.to(textRef.current, {
      textContent: '',
      duration: 0.5, // Clear text over half a second
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div style={{ fontSize: '70px', fontWeight: 'bold' }}>
      <span ref={textRef}></span>
    </div>
  );
};

export default TypingAnimation;
