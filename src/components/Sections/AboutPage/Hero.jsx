import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);

  // Scroll to top on mount (kept from your original code)
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Text Animation (Slides up)
    tl.from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.2 // Slight delay to let page load breathe
    })
    // 2. Image Animation (Scale down + Fade in)
    .from(".hero-image", {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.6"); // Overlaps with text animation for fluidity

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white overflow-hidden">
      {/* Text content area */}
      <div className="container mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-20 lg:pb-0">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-[80px] font-bold font-times text-[#20000F] max-w-2xl mt-9 leading-tight">
          Building Homes That Reflect You
        </h1>
      </div>
      
      {/* Image Wrapper with overflow-hidden to contain the scale effect cleanely */}
      <div className="w-full overflow-hidden">
        <img
          src="/Assets/abouthero.png"
          className="hero-image h-24 md:h-32 lg:h-[500px] w-full object-fit"
          alt="Hero showcasing modern architecture"
        />
      </div>
    </section>
  );
}

export default Hero;