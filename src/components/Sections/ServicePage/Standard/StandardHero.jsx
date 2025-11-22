import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const StandardHero = ({ title, description, img }) => {
  const containerRef = useRef(null);

  // 1. Fix: Force scroll to top when this component mounts
  // This ensures the user sees the top of the page on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. GSAP Entry Animations
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Title: Slides up and fades in
    tl.from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.1
    })
    // Description: Slides up gently after title
    .from(".hero-desc", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6")
    // Image: Slides in from the right with a subtle scale up
    .from(".hero-img", {
      x: 60,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      clearProps: "all" // Ensure hover effects (if any) work after animation
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[rgb(181,135,24)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Text Section */}
          <div className="text-white lg:mt-29 mt-12">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-[80px] lg:max-w-lg font-medium font-poppins tracking-tight mb-4">
              {title}
            </h1>

            <p className="hero-desc text-lg sm:text-xl text-amber-50">
              {description}
            </p>
          </div>

          {/* Image Section */}
{/* Image Section */}
<div className="mt-8 md:mt-0 lg:mt-10 flex justify-center">
  <div className="w-full max-w-lg h-[320px] sm:h-[380px] md:h-[420px] lg:h-[420px] overflow-hidden rounded-lg shadow-xl">
    <img
      className="hero-img w-full h-full object-cover"
      src={img}
      alt={title}
    />
  </div>
</div>    


        </div>
      </div>
    </div>
  );
};

export default StandardHero;