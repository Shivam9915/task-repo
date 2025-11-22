import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const StandardService = ({ serviceList = [] }) => {
  console.log("StandardService serviceList:", serviceList);
  const containerRef = useRef(null);

  // --- Scroll Trigger Entrance Animations ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    // 1. Title Slide Down
    tl.from(".section-title", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // 2. Cards Staggered Pop Up
    .from(".service-card", {
      y: 60,
      opacity: 2,
      // scale: 0.8,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.4");

  }, { scope: containerRef });

  // --- 3D Tilt Animation Handlers ---
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Calculate mouse position relative to center
    const x = (e.clientX - left - width / 2) / 15; 
    const y = (e.clientY - top - height / 2) / 15;

    gsap.to(card, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div ref={containerRef} className="bg-[#B587180D] py-19 xl:pt-9 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-times text-center text-gray-900 mb-2">
          Key Service
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
          {serviceList?.map((service, index) => (
            <div
              key={index} // Using index as fallback key, ideally use a unique ID from data
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="service-card group relative font-times bg-white p-8 rounded-lg shadow-lg text-center border border-[#B5871880] transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 cursor-pointer overflow-hidden"
            >
              {/* --- CURTAIN EFFECT --- */}
              {/* Expands horizontally from left to right on hover */}
              <div className="absolute inset-0 bg-[#B58718] transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>

              {/* Content Wrapper (z-10 ensures text stays on top of curtain) */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                  {service?.title}
                </h3>
                
                <p className="font-montserrat text-[16px] text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-100">
                  {service?.description}
                </p>
                
                <Link
                  to="/"
                  className="inline-block bg-[#B58718] text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md 
                             group-hover:bg-white group-hover:text-[#B58718] group-hover:shadow-lg group-hover:scale-105"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardService;