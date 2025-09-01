import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-western-desert to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-western-rust mb-2">About</h2>
              <h3 className="text-5xl font-bold text-foreground mb-6">Post card</h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                intro
              </p>
              <p>
                intro
              </p>
            </div>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          {/* Right Images */}
          <div className="space-y-8">
            <div className="aspect-[3/2] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg">
              <img 
                src="public\placeholder.svg"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="aspect-[3/2] bg-gradient-to-br from-western-orange to-western-rust rounded-lg overflow-hidden shadow-lg">
              <img 
                src="public\placeholder.svg"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;