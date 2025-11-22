import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/common/Header";
import Footer from "../components/Footer";
import FindUs from "../components/common/FindUs";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ============================================
   UPDATED CHECK ICON (white circle + gold tick)
   ============================================ */

const CheckIcon = () => (
  <div className="p-2 rounded-full bg-white flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#B58718]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12l3 3 5-5"
      />
    </svg>
  </div>
);

/* ============================================ */

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="0"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    />
  </svg>
);

const Carrer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const requirements = [
    "Relevant experience or education.",
    "Good communication skills.",
    "Proactive and self-motivated.",
    "Basic knowledge of tools/technology.",
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Smoother interaction, doesn't restart abruptly
      }
    });

    // 1. Main Container Fade
    tl.from(".career-content", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    // 2. Title: Blur + Float Up (Premium feel)
    .from(".page-title", {
      y: 40,
      opacity: 0,
      filter: "blur(12px)", // Starts blurry
      duration: 1.2,
      ease: "power3.out"
    })
    // 3. Columns: Fade Up with slight stagger
    .from([".left-col", ".right-col"], {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.8")
    // 4. List Items: Subtle pop-in
    .from(".req-item", {
      y: 15,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    // 5. Form Inputs: Cascading fade up
    .from(".form-input", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
  <div ref={containerRef} className="antialiased overflow-x-hidden">
      <Header bgColor="bg-[#B58718]" text="text-white" border="border" />

      <div className="min-h-screen mb-8 bg-gray-100">
        <div>
          <div className="career-content bg-[#B58718] text-white shadow-2xl p-8 md:p-12 mt-12">
            <h2 className="page-title md:text-5xl font-bold font-times text-center mb-12 lg:text-[80px]">
              Join Our Team
            </h2>

            {/* Changed space-x-48 to gap-12 md:gap-24 for better responsiveness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 p-4 md:p-12">
              {/* LEFT SIDE */}
              <div className="left-col space-y-8">
                <p className="text-gray-100 text-lg leading-relaxed">
                  We're always looking for talented and passionate individuals
                  to grow with us. If you're ready to make an impact and join a
                  dynamic work environment, we'd love to hear from you. Reach us
                  at:
                  <br />
                  <span className="inline-block font-semibold mt-3 cursor-pointer text-xl border-b border-transparent hover:border-white transition-all">
                    HR@THEMODERNTHEKEDAR.COM
                  </span>
                </p>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 font-times">
                    Job Requirements
                  </h3>

                  <ul className="space-y-4">
                    {requirements.map((req, index) => (
                      <li key={index} className="req-item flex items-center space-x-4">
                        <CheckIcon />
                        <span className="text-gray-100">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT FORM */}
              <form className="right-col space-y-6 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                {/* Full Name */}
                <div className="form-input">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter Full Name"
                    className="w-full bg-white/10 rounded-lg border border-gray-300/30 text-white placeholder-gray-300 p-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="form-input">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="w-full bg-white/10 rounded-lg border border-gray-300/30 text-white placeholder-gray-300 p-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="form-input">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    className="w-full bg-white/10 rounded-lg border border-gray-300/30 text-white placeholder-gray-300 p-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  />
                </div>

                {/* Skills */}
                <div className="form-input">
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Expert Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    placeholder="INTERIOR DESIGNER"
                    className="w-full bg-white/10 rounded-lg border border-gray-300/30 text-white placeholder-gray-300 p-3 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  />
                </div>

                {/* Upload Resume */}
                <div className="form-input">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Upload Resume
                  </label>

                  <label
                    htmlFor="resume"
                    className="flex justify-center w-full px-6 py-8 mt-2 border-2 border-gray-300/40 border-dashed rounded-lg cursor-pointer hover:border-white hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center space-y-2 text-gray-200">
                      <UploadIcon />
                      <span className="text-sm">Click to upload file</span>
                    </div>
                  </label>

                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    className="sr-only"
                  />
                </div>

                {/* Consent */}
                <div className="form-input flex items-center pt-2">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="h-4 w-4 rounded bg-transparent border-gray-300 text-[#B58718] focus:ring-offset-0 focus:ring-white/50"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-3 block text-sm text-gray-200 cursor-pointer"
                  >
                    I consent to the processing of my data
                  </label>
                </div>

                {/* Submit */}
                <div className="form-input pt-4">
                  <button
                    type="submit"
                    className="w-full bg-white text-[#B58718] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FindUs />
      <Footer />

  </div>
  );
};

export default Carrer;