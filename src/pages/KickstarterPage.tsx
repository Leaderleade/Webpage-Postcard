import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const KickstarterPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    },
    {
      id: 2,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    },
    {
      id: 3,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    },
    {
      id: 4,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    },
    {
      id: 5,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    },
    {
      id: 6,
      name: "placeholder",
      price: 149,
      description: "placeholder",
      category: "placeholder",
      image: "placeholder.svg"
    }
  ];

  // const handleAddToCart = (product: any) => {
  //   addToCart({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     description: product.description,
  //     category: product.category
  //   });
  // };

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
              Support our postcard collection through our Kickstarter campaign.
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
                      // onClick={() => handleAddToCart(product)}
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
            <h2 className="text-4xl font-bold text-foreground mb-6">placeholder</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              placeholder
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