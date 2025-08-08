import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-6">Your Cart</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your cart is currently empty.
              </p>
              <Button size="lg" onClick={() => window.location.href = '/shop'}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Shopping Cart</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-6 p-6 bg-card rounded-lg border">
                  <div className="aspect-square w-24 h-24 bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <p className="text-lg font-bold text-western-rust">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-lg font-medium min-w-[2rem] text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-bold text-foreground mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cart Summary */}
            <div className="mt-12 bg-card p-8 rounded-lg border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Order Summary</h3>
                <p className="text-3xl font-bold text-western-rust">
                  ${getCartTotal().toFixed(2)}
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-foreground">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => window.location.href = '/shop'}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;