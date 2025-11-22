import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Trigger when top of section hits 80% of viewport
        end: "bottom 20%",
        // restart: plays from start when scrolling down into view
        // reverse: plays backwards to 0 when scrolling up out of view
        toggleActions: "restart none none reverse", 
      }
    });

    // 1. Title Slides Down
    tl.from(".story-title", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // 2. Text Slides Up
    .from(".story-text", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4") // Slight overlap for smoother feel
    
    // 3. Image Slides in from Right + Scale Effect
    .from(".story-image", {
      x: 50,
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6"); // Starts while text is still animating

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:py-8 lg:pl-18 gap-12 items-center bg-[rgb(251,249,243)] border border-[rgb(237,227,200)] rounded-xl">
        <div>
          <h2 className="story-title text-[40px] font-bold text-[#0A0A0A] font-times mb-6">
            Who We Are
          </h2>
          <p className="story-text text-[#000000] leading-relaxed mb-4 font-montserrat text-[18px]">
            At TMT, we don’t just build houses — we create homes that tell your
            story. Every brick, every design choice, and every detail is crafted
            around you. We believe that a home should inspire, not just
            accommodate; it should reflect your personality, ambitions, and
            lifestyle. Our mission is to bring individuality, elegance, and
            timeless design back into home construction, so that no two TMT homes
            are ever alike.
          </p>
        </div>
        <div>
          <img
            src="/Assets/about2.png"
            alt="Our Story"
            className="story-image rounded-lg shadow-2xl object-cover w-full h-auto lg:w-[490px] lg:ml-16"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;