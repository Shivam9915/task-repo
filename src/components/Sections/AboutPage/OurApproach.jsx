import React from 'react'
import ApproachCard from '../../common/ApproachCard';


/**
 * Component: OurApproach
 */
const OurApproach = () => {

const approaches = [
  { 
    title: "Your Vision First",
    text: "We start by listening. Your ideas, needs, and dreams shape the blueprint."
  },
  { 
    title: "Design & Planning",
    text: "We create a functional, beautiful, and customized plan that fits your lifestyle."
  },
  { 
    title: "Premium Materials",
    text: "Only top-quality materials make it into your home, ensuring durability and elegance."
  },
  { 
    title: "Expert Craftsmanship",
    text: "Skilled professionals bring precision and care to every step of construction."
  },
  { 
    title: "Complete Project Management",
    text: "From architects to contractors, we manage every detail for you."
  },
  { 
    title: "Transparent Timeline & Cost:",
    text: "Once designs are approved, we provide a clear estimate and timeline so there are no surprises."
  },
  { 
    title: "From Start to Finish",
    text: "We handle everything, from foundation to finishing touches, interior design to landscaping, so you can enjoy the journey without stress."
  },
];


  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-36">
        <h2 className="text-4xl font-times font-bold text-[#000000] mb-5 text-center">
          Our Approach
        </h2>
        <p className="mb-20 w-[79%] mx-auto lg:ml-38 text-[#000000] font-montserrat text-[16px] font-normal">
            We understand that building a home can seem overwhelming. 
            That’s why we’ve designed a process that is simple, transparent, and stress-free — without compromising on luxury or
             quality.
        </p>
        
        {/* First 6 items in a 3-col grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {approaches.slice(0, 6).map((item, index) => (
            <ApproachCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
        
        {/* 7th item, centered on its own row */}
        <div className="mt-16 flex justify-start text-[#000000]">
           <div className="md:max-w-xs w-full"> {/* Constrain width similar to grid columns */}
             <ApproachCard text={approaches[6].text} />
           </div>
        </div>

      </div>
    </section>
  );
};

export default OurApproach