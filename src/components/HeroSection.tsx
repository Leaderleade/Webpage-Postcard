import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-western-desert to-western-tan overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-western-wood/30 to-transparent"></div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute left-0 top-0 w-2/3 h-full">
        <img 
          src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png" 
          alt="Western Bar Scene"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex items-center min-h-screen">
        <div className="ml-auto w-1/2 pl-12">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              STUNNING
              <br />
              <span className="text-western-rust">CUSTOM WALLPAPER</span>
              <br />
              FOR SPACES WORTH
              <br />
              <span className="text-western-orange">SHARING</span>
            </h1>
            
            <Button 
              variant="outline" 
              size="lg"
              className="mt-8 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-4"
              asChild
            >
              <Link to="/about">LEARN MORE</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;