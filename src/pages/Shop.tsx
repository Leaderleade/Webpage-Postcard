import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";
// kickstarter page
const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Placeholder",
      price: 89.99,
      description: "Placeholder",
      category: "Placeholder"
    },
    {
      id: 2,
      name: "Placeholder",
      price: 89.99,
      description: "Placeholder",
      category: "Placeholder"
    },
    {
      id: 3,
      name: "Placeholder",
      price: 89.99,
      description: "Placeholder",
      category: "Placeholder"
    },
    {
      id: 4,
      name: "Placeholder",
      price: 89.99,
      description: "Placeholder",
      category: "Placeholder"
    },
    // {
    //   id: 5,
    //   name: "Vintage Saddle Pattern",
    //   price: 68.99,
    //   description: "Classic leather and metal saddle motifs",
    //   category: "Wallpaper"
    // },
    // {
    //   id: 6,
    //   name: "Prairie Wildflower",
    //   price: 82.99,
    //   description: "Delicate wildflower patterns on neutral backgrounds",
    //   category: "Wallpaper"
    // }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Shop giftcard</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Placeholder.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg mb-6 group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/placeholder.svg"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-western-orange text-background text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold text-western-rust">
                      ${product.price}
                    </p>
                  </div>
                  {/* cart not needed for now */}
                  {/* <Button 
                    className="w-full"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-background to-western-desert">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-western-orange rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Placeholder</h3>
              <p className="text-muted-foreground">
                Placeholder
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-western-rust rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Placeholder</h3>
              <p className="text-muted-foreground">
                Placeholder
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-western-wood rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Placeholder</h3>
              <p className="text-muted-foreground">
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;