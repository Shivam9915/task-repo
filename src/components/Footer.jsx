import React, { useRef } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  const links = {
    Product: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
    Company: ["About", "Contact us", "Careers", "Culture", "Blog"],
    Support: [
      "Getting started",
      "Help center",
      "Server status",
      "Report a bug",
      "Chat support",
    ],
    Downloads: ["iOS", "Android", "Mac", "Windows", "Chrome"],
  };

  const socialIcons = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", name: "YouTube" },
  ];

  // --- Animations ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // Triggers when top of footer hits 90% of viewport
        toggleActions: "restart none none reverse",
      }
    });

    // 1. Top Section (Logo & Text)
    tl.from(".footer-top-content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    // 2. Divider lines expansion
    .from("hr", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1,
      ease: "expo.out"
    }, "-=0.6")
    // 3. Columns (Links & Newsletter) Staggered Rise
    .from(".footer-column", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1, // cascading effect
      ease: "power2.out"
    }, "-=0.8")
    // 4. Bottom Section (Copyright & Socials)
    .from(".footer-bottom", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  // --- Helper for Hover Animations ---
  const handleSocialEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.2, y: -5, duration: 0.3, ease: "back.out(2)" });
  };
  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" });
  };

  // Helper component for link columns
  const FooterLinkColumn = ({ title, items }) => (
    <div className="footer-column">
      <h4 className="font-semibold text-[#170F49] text-[20px] mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((link) => (
          <li key={link}>
            <a 
              href="#" 
              className="block text-[#6F6C90] text-[18px] transition-all duration-300 hover:text-[#B58718] hover:translate-x-2"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer ref={containerRef} className="bg-white text-gray-800 pb-12 font-sans overflow-hidden">
      <hr className="border border-gray-200 mt-8" />

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 px-6 md:px-20 my-12">
        <div className="footer-top-content text-4xl font-bold text-[#170F49]">Logo</div>
        <p className="footer-top-content text-gray-600 max-w-md text-left md:text-right text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <hr className="border border-gray-200 mt-8 w-full" />

      <div className="container mx-auto px-6 mt-16">
        {/* Middle Section: Links & Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          <FooterLinkColumn title="Product" items={links.Product} />
          <FooterLinkColumn title="Company" items={links.Company} />
          <FooterLinkColumn title="Support" items={links.Support} />
          <FooterLinkColumn title="Downloads" items={links.Downloads} />

          {/* Newsletter Column */}
          <div className="footer-column col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="font-semibold text-[#170F49] mb-4 text-[20px]">
              Subscribe to our newsletter
            </h4>
            <p className="text-gray-600 mb-4 lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam
              mauris sed ma
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-[100%] px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B58718] focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 w-1/2 bg-[#B58718] text-white font-semibold px-4 py-3 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Submit</span> 
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="footer-bottom border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-sm mb-4 md:mb-0 font-montserrat lg:text-[18px]">
            Copyright © {new Date().getFullYear()} | All Rights Reserved
          </p>
          <div className="flex space-x-5">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                className="text-[#B58718] transition-colors duration-300 p-2"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;