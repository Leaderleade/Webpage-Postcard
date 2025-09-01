import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const KickstarterPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Rustic Saloon Wallpaper",
      price: 149,
      description: "Transform your space with authentic western charm. Premium quality wallpaper featuring vintage saloon aesthetics.",
      category: "Wallpaper",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    },
    {
      id: 2,
      name: "Desert Canyon Mural",
      price: 299,
      description: "Bring the vast beauty of the American Southwest indoors with this stunning desert landscape mural.",
      category: "Mural",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    },
    {
      id: 3,
      name: "Gold Rush Pattern",
      price: 189,
      description: "Elegant wallpaper inspired by the California Gold Rush era, perfect for accent walls.",
      category: "Wallpaper",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    },
    {
      id: 4,
      name: "Cowboy Cantina Collection",
      price: 249,
      description: "Complete your western theme with this cantina-inspired wallpaper collection.",
      category: "Collection",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    },
    {
      id: 5,
      name: "Wild West Vintage",
      price: 199,
      description: "Authentic vintage western patterns that tell the story of the American frontier.",
      category: "Vintage",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    },
    {
      id: 6,
      name: "Ranch House Classic",
      price: 169,
      description: "Timeless ranch-style designs that bring warmth and character to any room.",
      category: "Classic",
      image: "/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-western-desert to-western-tan">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-western-wood/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Kickstarter Campaign</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Support our Western Tales wallpaper collection through our Kickstarter campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-western-wood to-western-brown overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-western-rust">${product.price}</span>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-western-rust hover:bg-western-rust/90 text-white"
                    >
                      Back This Product
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Info */}
      <section className="py-20 bg-gradient-to-br from-western-tan to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Support Western Tales</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Help us bring authentic western charm to homes across America. By backing our Kickstarter campaign, 
              you're not just getting premium wallpaper – you're supporting artisan craftsmanship and the preservation 
              of western heritage in modern design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-western-rust mb-2">500+</div>
                <div className="text-muted-foreground">Backers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-western-rust mb-2">$75K</div>
                <div className="text-muted-foreground">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-western-rust mb-2">15</div>
                <div className="text-muted-foreground">Days Left</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KickstarterPage;