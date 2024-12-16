import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the text when it comes into the viewport
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current, // Element to trigger animation
          start: "top 80%", // When the top of the element reaches 80% of the viewport
          end: "top 30%", // When the top of the element reaches 30% of the viewport
          scrub: true, // Smooth animation
        },
      }
    );
  }, []);

  return (
    <div
      style={{
        height: '150vh', // Extra height to enable scrolling
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
      }}
    >
      <div ref={textRef} style={{ fontWeight: 'bold', color:'white' }}>
        Scrolling Animation
      </div>
    </div>
  );
};

export default ScrollingAnimation;
