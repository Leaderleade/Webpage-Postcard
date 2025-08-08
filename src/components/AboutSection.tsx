import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-western-desert to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-western-rust mb-2">About</h2>
              <h3 className="text-5xl font-bold text-foreground mb-6">Western Tales</h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I believe we are deserving of warmth and character in our lives, and that they can be harnessed to tell our stories, create connection, and inspire joy in our homes, communities and around the world.
              </p>
              <p>
                Learn more about my range of residential and commercial services bringing the spirit of the old west to modern spaces.
              </p>
            </div>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Learn More
            </Button>
          </div>
          
          {/* Right Images */}
          <div className="space-y-8">
            <div className="aspect-[3/2] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Western Design Services"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="aspect-[3/2] bg-gradient-to-br from-western-orange to-western-rust rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Western Interior Design"
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