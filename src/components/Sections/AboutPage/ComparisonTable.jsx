import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ComparisonTable = () => {
  const containerRef = useRef(null);

  const tableData = [
    {
      feature: "Materials",
      standard: "Reliable, Standard",
      prime: "High Quality",
      luxe: "Premium, Handpicked, Exclusive"
    },
    {
      feature: "Finish",
      standard: "Practical & Durable",
      prime: "Elegant & Refined",
      luxe: "Luxurious, Tailored to Perfection"
    },
    {
      feature: "Design & Customization",
      standard: "Basic Options",
      prime: "Flexible Design Choices",
      luxe: "Fully Bespoke, Architect-Designed"
    },
    {
      feature: "Labor Quality",
      standard: "Skilled & Reliable",
      prime: "Advanced Skilled Craftsmanship",
      luxe: "Expert Artisans, Specialized Labor"
    },
    {
      feature: "Land Requirement",
      standard: "Minimum 3 Kottah",
      prime: "Minimum 4 Kottah",
      luxe: "More than 4 Kottah"
    },
    {
      feature: "Budget",
      standard: "Affordable & Value-for-Money",
      prime: "Mid-Range, Elevated",
      luxe: "High-End, Luxury Investment"
    },
    {
      feature: "Project Complexity",
      standard: "Simple & Straightforward",
      prime: "Moderate, Custom Features",
      luxe: "High-End, Fully Customized Projects"
    }
  ];

  const headerItems = ["Feature", "TMT Standard", "TMT Prime", "TMT Luxe"];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Triggers when top of section hits 85% of viewport
        end: "bottom 20%",
        toggleActions: "restart none none reverse", // Replays on enter, reverses on leave
      }
    });

    // 1. Table Container Slides Up
    tl.from(".table-wrapper", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    // 2. Header Slides Down
    .from(".table-header", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    // 3. Rows Slide In (Staggered)
    .from(".table-row", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1, // Delays each row by 0.1s
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Mobile scroll wrapper */}
        <div className="table-wrapper overflow-x-auto rounded-4xl border border-gray-700">
          <table className="w-full min-w-[800px] table-fixed border-collapse">
            {/* Table Header */}
            <thead className="table-header">
              <tr className="bg-[rgb(181,135,24)]">
                {headerItems.map((item, index) => (
                  <th
                    key={item}
                    className={`
                      py-4 md:py-6 px-2 md:px-5 text-center text-white font-bold 
                      text-[16px] md:text-[24px] font-times 
                      ${index < headerItems.length - 1 ? 'border-r border-yellow-600' : ''}
                    `}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white">
              {tableData.map((row, rowIndex) => (
                <tr 
                  key={row.feature} 
                  className={`table-row ${rowIndex < tableData.length - 1 ? 'border-b border-gray-700' : ''}`}
                >
                  <td className="p-2 md:p-5 text-[#1A1A1A] font-semibold text-center border-r border-gray-700 text-[14px] md:text-[20px] font-montserrat">
                    {row.feature}
                  </td>
                  <td className="p-2 md:p-5 text-[#1A1A1A] text-center border-r border-gray-700 text-[14px] md:text-[20px] font-montserrat">
                    {row.standard}
                  </td>
                  <td className="p-2 md:p-5 text-[#1A1A1A] text-center border-r border-gray-700 text-[14px] md:text-[20px] font-montserrat">
                    {row.prime}
                  </td>
                  <td className="p-2 md:p-5 text-[#1A1A1A] text-center text-[14px] md:text-[20px] font-montserrat">
                    {row.luxe}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;