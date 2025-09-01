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
            <h1 className="text-6xl font-bold text-foreground mb-6">Placeholder</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              intro
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
                <h3 className="text-4xl font-bold text-foreground mb-6">Placeholder</h3>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  intro
                </p>
                <p>
                  intro
                </p>
                <p>
                  intro
                </p>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg">
              <img 
                src="placeholder.svg"
                alt="placeholder"
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
              <h3 className="text-xl font-semibold text-foreground">placeholder</h3>
              <p className="text-muted-foreground">
                placeholder
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-western-rust rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">placeholder</h3>
              <p className="text-muted-foreground">
                placeholder
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-western-wood rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">placeholder</h3>
              <p className="text-muted-foreground">
                placeholder
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