import HeroSection from "../components/home/HeroSection";
import AboutUs from "../components/home/AboutUs";
import ServicesIntro from "../components/home/ServicesIntro";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesIntro />
      <ServicesGrid />
      <WhyChooseUs />
      <CTA />
      <Contact />
      {/* Add more sections here as needed */}
    </>
  );
}