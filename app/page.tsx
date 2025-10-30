import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import UnderNav from "./components/home/UnderNav";
import HeroCarousel from "./components/home/HeroCarousel";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import FeaturesSection from "./components/home/FeaturesSection";
import ProjectsSection from "./components/home/ProjectsSection";
import TeamSection from "./components/home/TeamSection";
import TestimonialSection from "./components/home/TestimonialSection";
import BlogSection from "./components/home/BlogSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <UnderNav />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
      <BackToTop />
    </>
  );
}
