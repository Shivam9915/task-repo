import React from "react";
import StandardHero from "../../components/Sections/ServicePage/Standard/StandardHero";
import StandardFeature from "../../components/Sections/ServicePage/Standard/StandardFeature";

import Header from "../../components/common/Header";
import CTABanner from "../../components/Sections/Homepage/CTABanner";
import Footer from "../../components/Footer";
import StandardService from "../../components/Sections/ServicePage/Standard/StandardService";

export default function Standard() {
  const featureList = [
    {
      title: "Your Vision First",
      description: "Strong and durable materials.",
    },
    {
      title: "Skilled Labor",
      description: "Experienced workers with a focus on quality.",
    },
    {
      title: "Affordable",
      description: "The best value for your investment.",
    },
    {
      title: "Budget-Friendly Design",
      description:
        "Functional, no-frills design that delivers strength and stability.",
    },
  ];

  // for standard service
    const serviceList = [
    {
      title: "TMT Standard",
      description: "Help to build your home with a good budget.",
    },
    {
      title: "TMT Prime",
      description:
        "Customize your dream home with superior materials and finishes.",
    },
    {
      title: "TMT Luxe",
      description:
        "Ready to move in luxury homes that come with no compromises.",
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
          title="TMT Standard"
          description="Engineered with precision, our TMT bars redefine strength and reliability. Designed to withstand extreme conditions, 
  they guarantee safety and durability for every project, big or small."
          img="/Assets/standardhero.png"
        />
        <StandardFeature
          heading="Need strength and quality within a good budget?"
          description="TMT Standard is perfect for clients who want a solid, dependable foundation for their homes without the frills. We use standard quality materials and offer functional design, ensuring that your home is built to last while staying within budget. With skilled labor and solid construction techniques, TMT Standard provides a reliable, 
  cost-effective solution without compromising the core values of craftsmanship and durability.."
          featureList={featureList}
        />
        <StandardService serviceList={serviceList} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
