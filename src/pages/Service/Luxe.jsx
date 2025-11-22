import React from 'react'
import StandardHero from '../../components/Sections/ServicePage/Standard/StandardHero';
import Header from '../../components/common/Header';
import StandardFeature from '../../components/Sections/ServicePage/Standard/StandardFeature';
import StandardService from '../../components/Sections/ServicePage/Standard/StandardService';
import CTABanner from '../../components/Sections/Homepage/CTABanner';
import Footer from '../../components/Footer';

export default function Luxe() {
  const featureList = [
    {
      title: "Bespoke Design",
      description: "Fully customized designs created by expert architects.",
    },
    {
      title: "Premium Materials",
      description: "Only the finest materials, sourced from the best suppliers..",
    },
    {
      title: "Expert Craftsmanship",
      description: "The most skilled labor force to deliver unparalleled results.",
    },
    {
      title: "No Compromises",
      description:
        "A fully tailored home experience, ensuring every detail meets your exact specifications."
    },
  ];

      // for standard service
    const serviceList = [
    {
      title: "TMT Standard",
      description: "Need strength and quality within a good budget?",
    },
    {
      title: "TMT Prime",
      description:
        "Looking to elevate your home with superior materials and finishes?",
    },
    {
      title: "TMT Luxe",
      description:
        "Ready for a truly luxurious, custom-built home with no compromises?",
    },
  ];


  return (
    <div className="font-sans antialiased text-gray-800 overflow-x-hidden">
      <Header
        bgColor="bg-[#B58718]"
        text="text-[rgb(255,250,230)]"
        border="border-[rgb(255,250,230)]"
      />
      <main>
<StandardHero
  title="TMT Luxe"
  description="Redefining premium construction, TMT Luxe combines cutting-edge technology with elegant performance. 
  Built for enduring strength and refined excellence in every structure."
  img="/Assets/standardlux.png"
/>
        <StandardFeature heading='Ready for a truly luxurious, custom-built home with no compromises?'
        description='TMT Luxe is for those who demand perfection — offering unlimited design possibilities, the finest materials, and unmatched craftsmanship. It delivers a fully bespoke experience,
         turning your vision into a timeless masterpiece with no compromises on quality or design.' featureList={featureList}/>
        <StandardService serviceList={serviceList} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}