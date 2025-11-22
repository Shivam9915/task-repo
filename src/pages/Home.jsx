

import Header from "../components/common/Header";
import Footer from "../components/Footer";
import Hero from "../components/Sections/Homepage/Hero";
import IconBar from "../components/Sections/Homepage/Iconbar";
import About from "../components/Sections/Homepage/About";
import Construction from "../components/Sections/Homepage/Construction";
import Faq from "../components/Sections/Homepage/Faq";
import Contact from "../components/Sections/Homepage/Contact";
import LatestArticle from "../components/Sections/Homepage/LatestArticle";
import Gallery from "../components/Sections/Homepage/Gallery";
import CTABanner from "../components/Sections/Homepage/CTABanner";
import MoreFAQ from "../components/Sections/Homepage/MoreFAQ";



// This component renders all the sections in order.
export default function Home  () {
  return (
    <div className="font-sans bg-white max-w-screen">
      <Header bgColor="" text="" border="" />
      <main>
        <Hero />
        <IconBar />
        <About />
        <Construction />
        <Faq />
        <Contact />
        <LatestArticle />
        <Gallery />
        <CTABanner />
        <MoreFAQ />
      </main>
      <Footer />
    </div>
  );
}
