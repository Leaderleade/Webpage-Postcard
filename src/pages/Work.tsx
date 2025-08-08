import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Desert Sunset Collection",
      description: "Custom wallpaper series inspired by Arizona sunsets",
      category: "Residential"
    },
    {
      id: 2,
      title: "Saloon Revival",
      description: "Complete interior design for a modern Western bar",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Ranch House Makeover",
      description: "Traditional ranch house with contemporary Western touches",
      category: "Residential"
    },
    {
      id: 4,
      title: "Frontier Office Space",
      description: "Corporate office with Western heritage themes",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Cabin in the Woods",
      description: "Rustic cabin interior with modern amenities",
      category: "Residential"
    },
    {
      id: 6,
      title: "Hotel Lobby Design",
      description: "Boutique hotel lobby with Western elegance",
      category: "Hospitality"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our portfolio of Western-inspired interior design and wallpaper projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-western-orange text-background text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-western-rust transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-background to-western-desert">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something beautiful together that tells your unique Western story.
            </p>
            <Button size="lg" className="mr-4">
              Get Quote
            </Button>
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;