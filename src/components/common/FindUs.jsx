import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FindUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Trigger slightly earlier
        end: "bottom 20%",
        // restart: plays from 0 on enter
        // reverse: resets to 0 when scrolling back up past the start
        toggleActions: "restart none none reverse",
      }
    });

    // 1. Header (Title & Desc) Slide Down
    tl.from(".find-us-header", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15
    })
    // 2. Main Horizontal Line Expands
    .from(".main-hr", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.4")
    // 3. Columns Slide In (Left & Right sync using 'columns' label)
    .add("columns")
    .from(".left-col-item", {
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "columns")
    .from(".right-col-item", {
      x: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "columns")
    // 4. Social Icons Pop In
    .from(".social-icon", {
      scale: 0,
      opacity: 0,
      rotation: -45,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.3");

  }, { scope: containerRef });

  // --- Flashlight Effect Handler ---
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Set CSS variables directly on the element for performance
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      // Default CSS variables to center to prevent errors before first move
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" }} 
      className="group relative w-full max-w-9xl p-8 md:p-12 text-white bg-[url('/Assets/contact.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-900/70 before:via-gray-900/70 before:to-blue-800/70 overflow-hidden"
    >
      {/* --- Flashlight Overlay --- */}
      {/* z-20: Places it above content (z-10) to brighten text too.
          pointer-events-none: Ensures clicks pass through to links/buttons.
          mix-blend-mode: 'overlay' creates a nice lighting effect.
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 40%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        <h1 className="find-us-header font-serif text-4xl md:text-5xl font-bold mb-3">
          Find Us
        </h1>
        <p className="find-us-header text-lg text-gray-300 mb-6">
          Reach out for bookings, inquiries, or personalized packages!
        </p>

        {/* Top HR line */}
        <hr className="main-hr border-gray-500" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Office Address */}
            <div className="left-col-item flex flex-col">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Office Address</h2>
                  <p className="text-gray-300 leading-relaxed">
                    1st Floor, SK CompoundBaneswar More, Eastern Bypass Road
                    Siliguri, West Bengal 734006, India
                  </p>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white underline mt-2 inline-block transition-colors"
                  >
                    Click Map
                  </a>
                </div>
              </div>
              <hr className="border-gray-500 mt-8 opacity-50" />
            </div>

            {/* Email Us */}
            <div className="left-col-item flex flex-col">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                  <a
                    href="mailto:contact@themodernthekedar.com"
                    className="text-gray-300 hover:text-white break-all transition-colors"
                  >
                    contact@themodernthekedar.com
                  </a>
                  <span className="text-gray-400 text-sm block">
                    (click-to-mail)
                  </span>
                </div>
              </div>
              <hr className="border-gray-500 mt-8 opacity-50" />
            </div>

            {/* Follow Us */}
            <div className="left-col-item flex flex-col">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">Follow Us :</h2>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="social-icon p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="social-icon p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="social-icon p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="social-icon p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Operating Hours */}
            <div className="right-col-item flex flex-col">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Operating Hours
                  </h2>
                  <p className="text-gray-300">
                    Monday-Saturday: 11:00 am to 6:00 pm
                  </p>
                </div>
              </div>
              <hr className="border-gray-500 mt-8 opacity-50" />
            </div>

            {/* Contact Details */}
            <div className="right-col-item flex flex-col">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Contact Details
                  </h2>
                  <a
                    href="tel:+919332016086"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 9332016086
                  </a>
                  <span className="text-gray-400 text-sm block">
                    (click-to-call)
                  </span>
                </div>
              </div>
              <hr className="border-gray-500 mt-8 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FindUs;