import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  // GSAP Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse", // Replays on scroll back
      }
    });

    // 1. Main Columns Entry
    tl.from(".contact-image-wrapper", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".contact-form-wrapper", {
      x: 50,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    }, "<") // "<" starts at same time as previous animation

    // 2. Form Fields Stagger (Cinematic Soft Focus)
    .fromTo(".form-item", 
      { 
        y: 20, 
        opacity:0.5, 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.2, 
        stagger: 0.1, // Smooth delay between inputs
        ease: "power2.out"
      }, 
      "-=0.5" // Overlap slightly with container entry
    );

  }, { scope: containerRef });


  // Helper component for form inputs (now with animation class)
  const FormInput = ({ label, type = "text", placeholder }) => (
    <div className="form-item flex flex-col group">
      <label className="text-sm font-semibold text-gray-700 mb-1 transition-colors duration-300 group-focus-within:text-[#B58718]">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58718] focus:border-transparent transition-all duration-300 hover:border-[#B58718]"
      />
    </div>
  );

  return (
    <section ref={containerRef} className="bg-stone-100 py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Image */}
          <div className="contact-image-wrapper w-full h-full relative">
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
              src="/Assets/villa2.png"
              alt="Modern Residence"
              className="w-full h-full rounded object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper p-8 md:p-12 bg-white">
            <form className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput label="First Name" placeholder="Full Name" />
                <FormInput label="Last Name" placeholder="Full Name" />
              </div>

              {/* Email Address */}
              <FormInput
                label="Email Address"
                type="email"
                placeholder="Email Address"
              />

              {/* Requirement */}
              <FormInput label="Requirement" placeholder="Requirement" />

              {/* Message */}
              <div className="form-item group">
                <label className="text-sm font-semibold text-gray-700 mb-1 block transition-colors duration-300 group-focus-within:text-[#B58718]">
                  Message
                </label>
                <textarea
                  placeholder="Enter Message"
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58718] focus:border-transparent transition-all duration-300 hover:border-[#B58718]"
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="form-item flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-[#B58718] border-gray-300 rounded focus:ring-[#B58718] cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer select-none">
                  Agree to our terms and conditions
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-item pt-2">
                <button
                  type="submit"
                  className="w-auto bg-[#B58718] text-white font-semibold px-10 py-3 rounded-md hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;