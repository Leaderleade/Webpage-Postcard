import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Gallery />
      <AboutSection />
      {/* <ServicesSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
