import React, { useRef } from 'react';
import { Flower } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const OurPromise = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Starts animation when top of section is near bottom of viewport
        end: "bottom 20%",
        toggleActions: "restart none none reverse", // Replays on enter, reverses on leave
      }
    });

    // 1. Icon Pop & Rotate (Blooming effect)
    tl.from(".promise-icon", {
      scale: 0,
      rotation: -45,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    // 2. Title Slides Up
    .from(".promise-title", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    // 3. Text Slides Up
    .from(".promise-text", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    // 4. Image Slides in from Right
    .from(".promise-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:py-8 lg:pl-18 gap-12 items-center bg-[rgb(251,249,243)] border border-[rgb(237,227,200)] rounded-xl">
        <div>
          {/* Icon */}
          <div className="promise-icon w-16 h-16 bg-[rgb(181,135,24)] rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 mb-6">
            <Flower size={32} className="text-white" />
          </div>
          <h2 className="promise-title text-[32px] font-bold text-[#0A0A0A] font-times mb-6">
            Our Promise
          </h2>
          <p className="promise-text text-[#0E0F13] leading-relaxed mb-4 font-montserrat text-[16px]">
            Every TMT home is more than just a structure. It’s a legacy, a
            sanctuary, and a statement. We ensure that your home isn’t just
            beautiful — it’s functional, timeless, and uniquely yours. When you
            choose TMT, you’re choosing a partner who is committed to making your
            vision tangible, flawless, and unforgettable.
          </p>
        </div>
        <div className="">
          <img
            src="/Assets/gallery1.png"
            alt="Our Story"
            className="promise-image rounded-lg shadow-2xl object-cover w-full h-auto lg:h-78 lg:w-[490px] lg:ml-10"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPromise;