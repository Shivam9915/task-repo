import React, { useState } from "react";
// We'll use lucide-react for icons as it's a great choice for React projects
import { Menu, X, Phone, Mail, MapPin, Command, Flower } from "lucide-react";
import Header from "../components/common/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Sections/Homepage/Gallery";
import MoreFAQ from "../components/Sections/Homepage/MoreFAQ";
import OurValues from "../components/Sections/AboutPage/OurValues";
import OurApproach from "../components/Sections/AboutPage/OurApproach";
import Hero from "../components/Sections/AboutPage/Hero";
import OurStory from "../components/Sections/AboutPage/OurStory";
import ComparisonTable from "../components/Sections/AboutPage/ComparisonTable";
import FounderVision from "../components/Sections/AboutPage/FounderVision";
import OurPromise from "../components/Sections/AboutPage/OurPromise";
import CTABanner from "../components/Sections/Homepage/CTABanner";

export default function About() {
  return (
    // We use 'font-sans' as the base, and apply 'font-serif' to headings
    <div className="bg-white font-sans overflow-x-hidden">
      <Header bgColor="bg-white" text='' />
      <main>
        <Hero />
        <OurStory />
        <OurApproach />
        <OurValues />
        <FounderVision />
        <OurPromise />

        <CTABanner />
        <ComparisonTable />
        <Gallery />
        <MoreFAQ />
      </main>
      <Footer />
    </div>
  );
}
