import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FounderVision = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Triggers when the top of the section hits 85% of the viewport height
        end: "bottom 20%",
        toggleActions: "restart none none reverse", // Plays on enter, reverses on leave
      }
    });

    // 1. Image Scale & Fade In
    tl.from(".vision-image-wrapper", {
      scale: 0.9,
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out"
    })
    // 2. Title Slide Up
    .from(".vision-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6") // Overlap slightly with image animation
    // 3. Text Slide Up
    .from(".vision-text", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-10 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Image */}
        <div className="vision-image-wrapper max-w-lg w-82 overflow-hidden rounded-lg shadow-2xl">
          <img
            src="/Assets/foundervision.png"
            alt="Founder's Vision - Construction Site"
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="vision-title text-4xl font-times font-bold text-yellow-500 mt-10 mb-6">
          Founder's Vision
        </h2>

        {/* Description Text */}
        <p className="vision-text text-[#000000c2] leading-relaxed text-center max-w-5xl font-montserrat font-normal text-[20px]">
          "TMT was founded to redefine home construction. The idea was simple:
          every client deserves a home that reflects their essence and lifestyle.
          Guided by this philosophy, our founder envisioned a company that
          delivers precision, luxury, and individuality, while taking the stress
          out of building a home. TMT exists to turn your dream into reality —
          without compromise."
        </p>
      </div>
    </section>
  );
};

export default FounderVision;