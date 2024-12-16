import "./WorkCardStyles.css";
import React, { useEffect, useRef } from "react";
import WorkCard from "./WorkCard";
import workCardData from "./workCardData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP Animation for the whole container (fade-in and slide-up)
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 }, // Initial state: transparent and below
      {
        opacity: 1, // Final opacity
        y: 0, // Slide to normal position
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start animation when container reaches 80% of viewport height
          end: "top 30%", // End when it reaches 30%
          scrub: true, // Smooth scrubbing
        },
      }
    );

    // GSAP Animation for each WorkCard (pop-up effect with stagger)
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.7, y: 100 }, // Initial state for all cards: transparent, small, and below
      {
        opacity: 1, // Fade to full opacity
        scale: 1, // Scale to normal size
        y: 0, // Move to normal position
        duration: 1.2, // Duration of the animation
        ease: "back.out(1.7)", // Back easing for pop-up effect
        stagger: 0.2, // Stagger the animation of each card by 0.2 seconds
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Trigger animation when WorkCard reaches 80% of the viewport
          end: "top 30%", // End when WorkCard reaches 30%
          scrub: true, // Smooth scrubbing
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workCardData.map((val, ind) => (
          <WorkCard
            key={ind}
            className={`work-card-${ind}`} // Add a unique class for each card
            ref={(el) => (cardsRef.current[ind] = el)} // Store a reference to each card
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
