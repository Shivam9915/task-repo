import { Command } from 'lucide-react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ApproachCard = ({ title, text }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "restart none none reverse",
      }
    });

    // 1. Icon Pop In (Simple scale/fade, no rotation)
    tl.from(".approach-icon", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    // 2. Vertical Line Grows Downwards
    .from(".approach-line", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.5,
      ease: "power2.inOut"
    }, "-=0.3")
    // 3. Text Content Slides In
    .from(".approach-text", {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Icon */}
      <div className="approach-icon w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
        <Command size={32} className="text-yellow-700" />
      </div>

      {/* Text content with a vertical line */}
      <div className="relative mt-8 pl-12">
        {/* The line */}
        <div className="approach-line absolute left-4 top-2 bottom-2 w-px bg-yellow-600"></div>

        {/* Title */}
        <h3 className="approach-text text-lg font-semibold text-black mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="approach-text text-[#000000] leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default ApproachCard;