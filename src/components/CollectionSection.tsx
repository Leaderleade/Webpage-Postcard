import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const CollectionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Collection Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Placeholder
            <br />
            <span className="text-western-rust">Placeholder</span>
          </h2>
          <Button 
            variant="outline"
            size="lg" 
            className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Placeholder
          </Button>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          {/* Project 1 */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg"
                alt="The Saloon Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">Placeholder</h3>
              <h4 className="text-xl text-western-rust font-medium mb-4">Placeholder</h4>
              <Button variant="ghost" className="text-foreground hover:text-western-orange">
                Placeholder
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-western-orange to-western-rust rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg"
                alt="Desert Bar Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">Placeholder</h3>
              <h4 className="text-xl text-western-rust font-medium mb-4">Placeholder</h4>
              <Button variant="ghost" className="text-foreground hover:text-western-orange">
                
                <Link to="Work">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;