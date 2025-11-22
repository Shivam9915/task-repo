import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // 1. Text Reveal Animation (Cinematic Blur + Slide)
    gsap.from(".about-text", {
      y: 50,
      opacity: 0,
      filter: "blur(10px)", // Adds a premium 'focus' effect
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        toggleActions: "play none none reverse",
      }
    });

    // 2. Image Entry (Scale Up)
    gsap.from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      }
    });

  }, { scope: containerRef });

  // Interactive 3D Tilt Effect logic
  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the center of the image
    const x = (e.clientX - left - width / 2) / 20; // Divide to control sensitivity
    const y = (e.clientY - top - height / 2) / 20;

    gsap.to(imageRef.current, {
      rotationY: x,    // Rotate horizontally
      rotationX: -y,   // Rotate vertically (inverted for natural feel)
      transformPerspective: 1000, // Gives it the 3D depth
      scale: 1.02,     // Slight zoom
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    // Reset to flat state
    gsap.to(imageRef.current, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section ref={containerRef} className="bg-white overflow-y-auto py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Interactive 3D Image */}
        <div 
          className="perspective-container flex justify-center cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imageRef}
            src="/Assets/About.png"
            alt="Elegant building interior"
            // Added transition for shadow and border
            className="rounded-lg h-[500px] shadow-xl w-full object-cover will-change-transform hover:shadow-[0_20px_50px_rgba(181,135,24,0.4)] transition-shadow duration-300"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="h-fit font-poppins">
          <h5 className="about-text text-[rgb(181,135,24)] font-bold text-3xl">
            About us
          </h5>
          <h2 className="about-text mt-8 font-times text-4xl font-bold text-gray-800">
            The Illusion of Choice Flats or Chaos, Both Are Traps.
          </h2>
          <p className="about-text mt-6 text-gray-600 leading-relaxed font-poppins">
            At The Modern Thekedar (TMT), we’re redefining how homes are built.
            No cramped flats. No chaotic construction. Just smart design, honest
            execution, and peace of mind. We blend modern design expertise with
            traditional craftsmanship — giving you the freedom of a custom home
            and the ease of a seamless, professional process. No fear. No
            stress. No compromise. Just your dream — built right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;