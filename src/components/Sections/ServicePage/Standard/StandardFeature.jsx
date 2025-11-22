import { CommandIcon } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const StandardFeature = ({ heading = "", description = "", featureList = [] }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", // Triggers slightly earlier for better visibility
        end: "bottom 20%",
  scrub: 0.6,     // <— smooth scroll animation
  once: false,
      }
    });

    // 1. Headings Slide In
    tl.fromTo(".left-col-anim", 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power3.out" }
    );

    // 2. Icons Pop In (Preserved your icons, added elastic pop)
    tl.fromTo(".feature-icon", 
      { scale: 0, rotation: -45, opacity: 0 },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "elastic.out(1, 0.5)" 
      }, 
      "-=0.5"
    )

    // 3. Dashed Line Grows (Visual connection)
    .fromTo(".feature-line",
      { scaleY: 0, opacity: 0 },
      { 
        scaleY: 1, 
        opacity: 1, 
        transformOrigin: "top", // Grows from top down
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.inOut" 
      }, 
      "<" // Starts at same time as icon
    )

    // 4. Text Reveal
    .fromTo(".feature-text",
      { x: 20, opacity: 1 },
      { 
        x: 0, 
        opacity: 2, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      }, 
      "<0.2" // Slight delay after line starts
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <h2 className="left-col-anim text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              {heading}
            </h2>
            <p className="left-col-anim mt-6 text-lg text-gray-600">{description}</p>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {featureList && featureList.map((feature, index) => (
              <div key={index} className="relative group">
                
                {/* Icon Box - Preserved Exact Classes + Animation Class */}
                <div className="feature-icon w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg border border-gray-200 flex-shrink-0 z-10 relative">
                  <CommandIcon className="h-8 w-8 text-amber-700" />
                </div>

                {/* Text content wrapper */}
                <div className="relative mt-6 pl-12">
                  {/* The Line */}
                  <div className="feature-line absolute left-4 top-1 bottom-1 border-l-2 border-dashed border-amber-600"></div>

                  {/* Title & Description */}
                  <div className="feature-text">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-[14px] leading-relaxed mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardFeature;