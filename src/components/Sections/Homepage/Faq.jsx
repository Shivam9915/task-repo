import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- Sub-Component for Individual FAQ Item ---
const FaqItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      // Kill any existing animations
      gsap.killTweensOf(".word");
      
      // Reset: Start high up (-50px), invisible, and slightly tilted
      gsap.set(".word", { 
        opacity: 0, 
        y: -50, 
        skewX: -20 // Adds momentum feel to the fall
      });

      // Animate: Distinct falling effect
      gsap.to(".word", {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 0.8,       // Longer duration for the fall physics
        stagger: 0.05,       // Distinct delay to see words falling one by one
        ease: "elastic.out(1, 0.6)", // Bouncy landing effect
        delay: 0.1,
      });
    }
  }, { scope: contentRef, dependencies: [isOpen] }); 

  // Split text into words for animation
  const words = faq.answer.split(" ");

  return (
    <div className="faq-item border-b border-gray-300 pb-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className={`text-xl font-semibold font-poppins transition-colors duration-300 ${isOpen ? 'text-[#B58718]' : 'text-gray-800'} group-hover:text-[#B58718]`}>
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronUp size={24} className="text-[#B58718]" />
        ) : (
          <ChevronDown size={24} className="text-gray-600 group-hover:text-[#B58718]" />
        )}
      </button>

      {/* Accordion Content Wrapper */}
      <div
        className={`grid transition-all duration-700 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr] mt-0'
        }`}
      >
        <div ref={contentRef} className="overflow-hidden">
          {/* Added padding-top to ensure words falling from -50px aren't cut off immediately */}
          <p className="text-gray-600 leading-relaxed font-poppins pt-2">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="word inline-block mr-[5px] will-change-transform origin-top"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const containerRef = useRef(null);
  
  // GSAP Animations for the Section Entry
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    // 1. Title Animation
    tl.from(".faq-title", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // 2. Image Animation
    .from(".faq-image", {
      x: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    // 3. List entry
    .from(".faq-list", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.8");

  }, { scope: containerRef });

  const faqs = [
    {
      question: "What Type Of Properties Do You Deal With?",
      answer:
        "Business murals are large-scale images or designs that cover entire walls, transforming commercial spaces into unique and engaging environments. These murals serve as powerful tools to convey a company's message, values, and brand identity.",
    },
    {
      question: "How Do I Start The Process Of Buying A Property?",
      answer:
        "Starting the process is simple. Contact our advisory team for an initial consultation, where we'll discuss your needs, preferences, and financial goals to curate a list of suitable properties for you.",
    },
    {
      question: "What Should I Consider Before Purchasing A Property?",
      answer:
        "Consider factors like location, budget, property size, long-term value, and available amenities. Our experts can guide you through a comprehensive checklist to ensure you make an informed decision.",
    },
    {
      question: "Can You Help With Financing Options?",
      answer:
        "Yes, we partner with leading financial institutions to offer bespoke financing solutions. Whether you need a mortgage, bridge loan, or investment advice, our network ensures you get the best rates available.",
    },
    {
      question: "Do You Offer Interior Design Services?",
      answer:
        "Absolutely. We deal with a wide range of luxury properties, including residential homes, penthouses, and commercial real estate. Our in-house design team can help transform any space to match your personal aesthetic.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={containerRef} className="bg-stone-100 py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: FAQs */}
        <div className="flex flex-col">
          <h2 className="faq-title font-times text-4xl font-bold text-gray-800 mb-12">
            FAQ's About Property
          </h2>
          <div className="faq-list space-y-6">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="faq-image">
          <img
            src="/Assets/villa.png"
            alt="Modern Villa"
            className="rounded-lg shadow-2xl h-[449px] w-[658px] object-center object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;