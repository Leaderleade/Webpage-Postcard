import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
