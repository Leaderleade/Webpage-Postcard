import { Button } from "@/components/ui/button";

const CollectionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Collection Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            WESTERN TALES
            <br />
            <span className="text-western-rust">X SALOON WALLS</span>
          </h2>
          <Button 
            variant="outline"
            size="lg" 
            className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            SHOP THE COLLECTION
          </Button>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          {/* Project 1 */}
          <div className="relative group">
            <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="The Saloon Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">THE RUSTIC</h3>
              <h4 className="text-xl text-western-rust font-medium mb-4">SALOON</h4>
              <Button variant="ghost" className="text-foreground hover:text-western-orange">
                VIEW THE PROJECT
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group">
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
              <Button variant="ghost" className="text-foreground hover:text-western-orange">
                VIEW THE PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;