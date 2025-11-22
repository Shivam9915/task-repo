import React from "react";
import StandardHero from "../../components/Sections/ServicePage/Standard/StandardHero";
import Header from "../../components/common/Header";
import StandardFeature from "../../components/Sections/ServicePage/Standard/StandardFeature";
import StandardService from "../../components/Sections/ServicePage/Standard/StandardService";
import CTABanner from "../../components/Sections/Homepage/CTABanner";
import Footer from "../../components/Footer";

export default function Prime() {
  const featureList = [
    {
      title: "Above-Standard Materials",
      description: "Upgraded materials, finishes, and fittings.",
    },
    {
      title: "Advanced Skilled Labor",
      description: "EHighly trained craftsmen ensuring superior results.",
    },
    {
      title: "Highly trained craftsmen ensuring superior results.",
      description: "Greater flexibility in design compared to TMT Standard..",
    },
    {
      title: "Enhanced Aesthetics",
      description:
        "Sophisticated touches that elevate the look and feel of your home.",
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
          title="TMT Prime"
          description="Experience the next level of strength with TMT Prime. Built for excellence,
   our bars deliver unmatched quality, durability, and reliability for every modern structure.."
          img="/Assets/standardprime.png"
        />
        <StandardFeature
          heading="Looking to elevate your home with superior materials and finishes?"
          description="TTMT Prime offers superior finishes, premium materials, and greater design flexibility than TMT Standard. It delivers an elevated living experience with
           high-quality craftsmanship and long-lasting value — all while staying budget-conscious."
          featureList={featureList}
        />

        <StandardService serviceList={serviceList} />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
