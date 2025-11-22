import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Construction = () => {
  const containerRef = useRef(null);
  const servicesRef = useRef([]);

  const services = [
    {
      num: "#1",
      title: "Initial Consultation",
      description:
        "We begin by understanding your lifestyle, aspirations, and vision. Every detail matters, as this becomes the foundation for your dream home.",
    },
    {
      num: "#2",
      title: "Concept & Design",
      description:
        "Our architects and designers transform your ideas into precise, elegant plans. From layout to interiors, every corner is curated for beauty, functionality, and timeless appeal.",
    },
    {
      num: "#3",
      title: "Project Estimate & Timeline",
      description:
        "Once the design is approved, we prepare a complete project estimate and timeline, giving you a clear roadmap of your home's construction journey.",
    },
    {
      num: "#4",
      title: "Material Selection & Customization",
      description:
        "Only the finest materials make it into your home. We guide you through selections, finishes, and customizations, ensuring every element matches your approved design and estimate.",
    },
    {
      num: "#5",
      title: "Construction & Project Management",
      description:
        "From foundation to finish, our expert team executes every stage flawlessly. We handle logistics, timelines, and quality control, ensuring your project stays on schedule and on budget.",
    },
    {
      num: "#6",
      title: "Final Walkthrough & Handover",
      description:
        "The moment your dream home is ready, we walk you through every detail. Your home is not just built, it's perfected, ready to welcome your life and legacy.",
    },
  ];

  useGSAP(() => {
    // 1. Left Panel Animation (Sticky Side)
    gsap.from(".left-panel-anim", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // 2. Service Items Animation (Right Side)
    servicesRef.current.forEach((el, index) => {
      if (!el) return;

      const border = el.querySelector(".service-border");
      const content = el.querySelectorAll(".service-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Starts when top of item hits 85% of viewport height
          end: "top 10%",
          // toggleActions: "play reverse play reverse", 
          // Triggers every time on scroll
        },
      });

      // Step A: Draw the border line from 0% width to 100%
      tl.fromTo(
        border,
        { width: "0%", opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.6, ease: "power2.inOut" }
      )
      // Step B: Slide up text content
      .from(
        content,
        {
          y: 20,
          opacity: 0,
          duration: 0.2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      ); // Slight overlap with border animation
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FBF9F3] text-black py-24 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Intro & CTA (Sticky) */}
          <div className="left-panel-anim flex flex-col justify-between items-start  lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)]">
            
            <div className="space-y-8">
              <div className="border border-[#CFA036] text-[#CFA036] px-4 py-2 w-fit text-lg font-medium tracking-wide">
                How We Work
              </div>
              
              <h2 className="font-times text-4xl lg:text-5xl font-medium leading-tight text-black">
                Comprehensive <br /> Construction Services
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-lg font-poppins">
                At Buildpro, we offer a wide range of construction services
                tailored to meet the unique needs of our clients. From initial
                planning to final touches, our skilled team is dedicated to
                delivering excellence in every project.
              </p>
            </div>

            <button className="bg-[#B58718] hover:bg-[#967014] transition-colors text-white text-lg font-medium rounded-md px-8 py-3 mt-12 lg:mt-0 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Enquire Now
            </button>
          </div>

          {/* Right Column: Services List */}
          <div className="flex flex-col lg:mt-32">
            {services.map((service, index) => (
              <div
                key={service.num}
                ref={(el) => (servicesRef.current[index] = el)}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 py-12 group"
              >
                {/* Animated Top Border (Replaces standard border-t for animation control) */}
                <div className="service-border absolute top-0 left-0 h-[1px] bg-[#CFA036] w-full opacity-0"></div>

                {/* Left part: Number and Title */}
                <div className="service-content flex gap-6 items-start">
                  <span className="text-3xl font-medium text-[#CFA036] opacity-90">
                    {service.num}
                  </span>
                  <h3 className="text-xl font-semibold font-montserrat text-gray-900 mt-1 group-hover:text-[#B58718] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Right part: Description */}
                <div className="service-content">
                  <p className="text-gray-600 leading-relaxed text-lg font-montserrat">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Bottom Closing Border */}
            <div className="w-full h-[1px] bg-gray-300 mt-2 opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Construction;