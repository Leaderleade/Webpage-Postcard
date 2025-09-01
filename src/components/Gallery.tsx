import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Postcard
            <br />
            <span className="text-western-rust">1</span>
          </h2>
          <Button 
            variant="outline"
            size="lg" 
            className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
            asChild
          >
            <Link to="/kickstarter">SUPPORT ON KICKSTARTER</Link>
          </Button>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          {/* Project 1 */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden">
              <img 
                src="placeholder.svg"
                alt="The card Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">Placeholder</h3>
              <h4 className="text-xl text-western-rust font-medium mb-4">Placeholder</h4>
              <Button variant="ghost" className="text-foreground hover:text-western-orange" asChild>
                <Link to="/work">VIEW THE card</Link>
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          {/* <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-western-orange to-western-rust rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Desert Bar Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">DESERT</h3>
              <h4 className="text-xl text-western-rust font-medium mb-4">CANTINA</h4>
              <Button variant="ghost" className="text-foreground hover:text-western-orange" asChild>
                <Link to="/work">VIEW THE PROJECT</Link>
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;