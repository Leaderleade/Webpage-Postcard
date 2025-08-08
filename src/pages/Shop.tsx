import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Desert Sunrise Wallpaper",
      price: 89.99,
      description: "Warm gradient wallpaper inspired by desert sunrises",
      category: "Wallpaper"
    },
    {
      id: 2,
      name: "Cactus Pattern Collection",
      price: 76.99,
      description: "Stylized cactus patterns perfect for accent walls",
      category: "Wallpaper"
    },
    {
      id: 3,
      name: "Rustic Wood Texture",
      price: 94.99,
      description: "Authentic weathered wood texture wallpaper",
      category: "Wallpaper"
    },
    {
      id: 4,
      name: "Western Landscape Series",
      price: 129.99,
      description: "Panoramic Western landscape murals",
      category: "Mural"
    },
    {
      id: 5,
      name: "Vintage Saddle Pattern",
      price: 68.99,
      description: "Classic leather and metal saddle motifs",
      category: "Wallpaper"
    },
    {
      id: 6,
      name: "Prairie Wildflower",
      price: 82.99,
      description: "Delicate wildflower patterns on neutral backgrounds",
      category: "Wallpaper"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Shop Western Tales</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our collection of premium Western-inspired wallpapers and murals.
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
                    src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
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
                  <Button 
                    className="w-full"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
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
              <h3 className="text-xl font-semibold text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                High-quality materials designed to last for years.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-western-rust rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Easy Installation</h3>
              <p className="text-muted-foreground">
                Simple peel-and-stick application for most products.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-western-wood rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Custom Sizes</h3>
              <p className="text-muted-foreground">
                Available in custom dimensions for any space.
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