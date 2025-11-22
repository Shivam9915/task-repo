import React, { useEffect, useRef } from "react";
import Header from "../components/common/Header";
import BlogCard from "../components/common/BlogCard";
import CTABanner from "../components/Sections/Homepage/CTABanner";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* -----------------------------------------
   ICONS USED IN FILTER CATEGORY BUTTONS
-------------------------------------------- */

const BuyerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const InvestmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 3.293a1 1 0 00-1.414 0l-6 6a1 1 0 001.414 1.414L9 6.414V17a1 1 0 102 0V6.414l4.293 4.293a1 1 0 001.414-1.414l-6-6z" />
  </svg>
);

const LocalTrendsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const LegalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v2h12V5zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 0H4v2h12v-2z" />
  </svg>
);

/* -----------------------------------------
   BLOG CARD COMPONENT
-------------------------------------------- */



/* -----------------------------------------
   BLOG PAGE CONTENT DATA
-------------------------------------------- */

  const blogPosts = [
    {
      id: 1,
      imageUrl: "/Assets/Bpost1.png",
      category: "Architecture",
      title: "Home Staging Tips to Attract Buyers Quickly",
      date: "July 9, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 2,
      imageUrl: "/Assets/Bpost2.png",
      category: "Building",
      title: "Navigating the Mortgage Approval Process",
      date: "July 9, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 3,
      imageUrl: "/Assets/Bpost3.png",
      category: "Checklist",
      title: "The Ultimate Checklist for First-Time Home Buyers",
      date: "July 9, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 4,
      imageUrl: "/Assets/Bpost4.png",
      category: "Staging",
      title: "Effective Interior Staging for Faster Sales",
      date: "July 10, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 5,
      imageUrl: "/Assets/Bpost5.png",
      category: "Property",
      title: "Modern Villa Designs That Inspire",
      date: "July 11, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 6,
      imageUrl: "/Assets/Bpost6.png",
      category: "Design",
      title: "Top Interior Design Trends of 2024",
      date: "July 12, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 7,
      imageUrl: "/Assets/Bpost7.png",
      category: "Tips",
      title: "How to Increase Property Value Before Selling",
      date: "July 13, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 8,
      imageUrl: "/Assets/Bpost8.png",
      category: "Luxury",
      title: "Exploring the Most Luxurious Homes of 2024",
      date: "July 14, 2024",
      author: "Brooklyn Simmons",
    },
    {
      id: 9,
      imageUrl: "/Assets/Bpost9.png",
      category: "Technology",
      title: "Smart Home Technologies You Should Know About",
      date: "July 15, 2024",
      author: "Brooklyn Simmons",
    }
  ];


const filterCategories = [
  { name: "All", icon: null, active: true },
  { name: "Buyer's Leader", icon: <BuyerIcon /> },
  { name: "Investment Tips", icon: <InvestmentIcon /> },
  { name: "Local Trends", icon: <LocalTrendsIcon /> },
  { name: "Legal & Finance", icon: <LegalIcon /> },
];

/* -----------------------------------------
   MAIN BLOG PAGE
-------------------------------------------- */

const Blog = () => {
  const containerRef = useRef(null);

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- GSAP Animations ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "restart none none reverse",
      }
    });

    // 1. Header Entrance
    tl.from(".page-title", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".page-desc", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    
    // 2. Filter Buttons Entrance (Staggered Pop)
    .from(".filter-btn", {
      opacity: 2,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.3")
    
    // 3. Blog Cards Entrance (Staggered Slide Up)
    .from(".blog-card", {
      y: 60,
      opacity: 2,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

  }, { scope: containerRef });


  return (
    <div ref={containerRef} className="bg-white font-sans overflow-x-hidden">

      {/* TOP HEADER */}
      <Header bgColor="bg-white" text="" border="" />

      {/* MAIN BLOG UI */}
      <div className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Page Intro */}
          <div className="text-center mb-16">
            <h2 className="page-title text-4xl md:text-5xl font-bold font-times lg:text-[80px] lg:max-w-2xl lg:ml-79 text-[#20000F] mb-9 mt-12">
              Insights, Tips & Property Advice
            </h2>
            <p className="page-desc text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert-backed articles on buying, renting, investing,  
              and property trends across Siliguri, Bihar, Sikkim & North Bengal.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filterCategories.map((cat) => (
              <button
                key={cat.name}
                className={`filter-btn flex items-center gap-2 py-3 px-9 font-normal font-montserrat rounded-full text-[14px] transition-all duration-300 transform hover:scale-105 active:scale-95
                  ${cat.active
                    ? "bg-[#B58718] text-white shadow-lg"
                    : "bg-transparent border border-[#B58718] text-[#B58718] hover:bg-yellow-50"
                  }
                `}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* BLOG CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-8">
            {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog-details`}>

              <BlogCard
                key={post.id}
                imageUrl={post.imageUrl}
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
              />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA + FOOTER */}
      <CTABanner />
      <Footer />

    </div>
  );
};

export default Blog;