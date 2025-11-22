import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CTABanner = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Starts animation when section is in view
        toggleActions: "play none none reverse",
      }
    });

    // 1. The Image Container (Background) appears first
    tl.from(".cta-bg-container", {
      clipPath: "inset(100% 0% 0% 0%)", // Wipes up from bottom
      duration: 1,
      ease: "power4.inOut",
    })

    // 2. The Text Content (Title + Button) appears second
    .from(".cta-content", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.4") // Overlaps slightly with container animation

    // 3. The Decoration Images appear last
    .from(".deco-img", {
      scale: 0,
      opacity: 0,
      rotation: 15, // Slight rotation for flair
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.7)", // Pop effect
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    // Preserved outer section with font-serif
    <section ref={containerRef} className="bg-white font-serif md:py-0 relative overflow-hidden">

      {/* Upper images - Preserved Structure */}
      <div className="top-img-con relative bottom-[-117px] z-20">
        <img src="/Assets/toptilt.png" className="deco-img absolute top-[-16px] left-15" alt="" />
        <img src="/Assets/toptilt1.png" className="deco-img" alt="" />
      </div>

      {/* The Main Background Container */}
      <div className="cta-bg-container h-[653px] bg-[url('/Assets/Ctabanner.png')] bg-no-repeat transform">
        
        {/* Text Content with Skew - Preserved */}
        <div className="transform -skew-y-1 flex flex-col justify-center items-center text-center text-white px-6 py-46 h-full">
          
          <h2 className="cta-content text-4xl md:text-5xl lg:text-[50px] font-normal leading-tight max-w-4xl font-times">
            Your dream deserves more than ordinary walls. Let's build a home that's as extraordinary as you are.
          </h2>
          
          <Link
            to="#"
            className="cta-content mt-10 bg-white text-[#B58718] border border-white font-semibold px-8 py-3 rounded-md hover:bg-gray-100 hover:text-[#967014] transition-colors duration-300 font-sans"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Down images - Preserved Structure */}
    <div className="absolute right-0 bottom-12">
      <img src="/Assets/ctadown.png" className="deco-img" alt="" />
      <img src="/Assets/toptilt.png" className="deco-img absolute top-10 right-5" alt="" />
    </div>
      </div> 
    </section>
  );
};

export default CTABanner;