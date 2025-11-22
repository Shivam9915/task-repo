import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ApproachCard from '../../common/ApproachCard';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const OurValues = () => {
  const containerRef = useRef(null);

  const values = [
    { 
      title: "Individuality",
      text: "Each home is a reflection of its owner - no templates, no compromises."
    },
    { 
      title: "Excellence",
      text: "From materials to craftsmanship, every detail meets the highest standards."
    },
    { 
      title: "Integrity",
      text: "Transparent communication and honest execution are non-negotiable."
    },
    { 
      title: "Timelessness",
      text: "We create homes that will endure, delight, and maintain value for generations."
    },
    { 
      title: "Luxury with Purpose",
      text: "Elegant, functional design that enhances both comfort and lifestyle."
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Animation starts when section is near the bottom of viewport
        end: "bottom 20%",
        // toggleActions: "restart none none reverse", // Plays on enter, reverses on leave
      }
    });

    // 1. Title Slide Down
    tl.from(".values-title", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // 2. Description Slide Up
    .from(".values-desc", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-[rgb(251,249,243)] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-36">
        <h2 className="values-title text-4xl font-times font-bold text-[#000000] mb-3 text-center">
          Our Values
        </h2>
        <p className="values-desc mb-20 w-[79%] mx-auto lg:ml-68 text-[#000000] font-montserrat text-[16px] font-normal">
          At TMT, every project is guided by principles that set us apart
        </p>
        
        {/* First 6 items in a 3-col grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {values.slice(0, 6).map((item, index) => (
            <ApproachCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
        
        {/* 7th item, centered on its own row (kept logic structure) */}
        <div className="mt-16 flex justify-center text-[#000000]">
           <div className="md:max-w-xs w-full"> {/* Constrain width similar to grid columns */}
             {/* <ApproachCard text={values[6]?.text} /> */}
           </div>
        </div>

      </div>
    </section>
  );
};

export default OurValues;