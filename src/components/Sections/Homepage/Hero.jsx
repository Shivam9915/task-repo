import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // GSAP Entry Animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Animate Text Elements (Title, Paragraph, Button)
    tl.from(".hero-animate-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    // 2. Animate Image (Slide in from right with fade)
    tl.from(".hero-animate-img", {
      x: 50,
      opacity: 0,
      duration: 1.2,
    }, "-=0.8"); // Start slightly before text animation ends

  }, { scope: containerRef });

  // Toggle Read More
  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  // Text Content separated for logic
  const textPart1 = "Let’s be real for a second. Look around any city skyline — what do you see? Flats. Everywhere. Tall, lifeless boxes stacked one on top of another, pretending to be dreams.";
  const textPart2 = " Same paint. Same tiles. Same floor plan. Same suffocating view. Every corridor looks the same, every door hides another copy-paste life. And somehow, people call that “home.” No, that’s not a home — that’s a high-rise excuse. A glorified pigeonhole built by someone who never knew your name, your taste, or your dream.";

  return (
    <section ref={containerRef} className="min-h-[87vh] bg-[url('/Assets/Rectangle.png')] bg-no-repeat bg-top">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-5">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="hero-animate-text text-5xl md:text-6xl font-times font-bold text-gray-800 leading-17">
            For Visionaries who demand more than just ordinary.
          </h1>
          
          <div className="hero-animate-text mt-6 text-lg text-gray-600 font-poppins">
            <p ref={textRef}>
              {textPart1}
              {/* If expanded, show the rest of the text with a smooth fade-in.
                 If not expanded, show nothing (hidden).
              */}
              <span className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'hidden opacity-0'}`}>
                {textPart2}
              </span>
              {!isExpanded && <span>...</span>}
            </p>
          </div>

          <div className="hero-animate-text mt-5">
            <a
              href="#"
              onClick={toggleReadMore}
              className="bg-yellow-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-800 transition-colors duration-300 inline-block"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-animate-img bg-red-800 rounded-2xl shadow-lg h-[500px]">
          <img
            src="/Assets/Hero.png"
            alt="Modern residential building"
            className="rounded-lg shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;