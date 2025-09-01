import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">About Western Tales</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bringing the warmth and character of the old west to modern spaces through custom wallpaper and interior design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-western-rust mb-2">Our Story</h2>
                <h3 className="text-4xl font-bold text-foreground mb-6">Heritage & Craftsmanship</h3>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for preserving the spirit of the American West, Western Tales specializes in creating unique wallpaper designs and interior solutions that capture the essence of frontier life.
                </p>
                <p>
                  Our designs draw inspiration from the rugged landscapes, rich textures, and timeless stories of the Old West, translating them into contemporary pieces that bring warmth and character to any space.
                </p>
                <p>
                  Every piece is crafted with attention to detail and respect for the heritage that inspires our work.
                </p>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Western Tales Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-background to-western-desert">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-western-orange rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Authenticity</h3>
              <p className="text-muted-foreground">
                Every design stays true to the spirit and heritage of the American West.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-western-rust rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality</h3>
              <p className="text-muted-foreground">
                Premium materials and craftsmanship in every piece we create.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-western-wood rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Connection</h3>
              <p className="text-muted-foreground">
                Creating spaces that tell stories and bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;