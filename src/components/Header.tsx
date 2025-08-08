import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const { getCartCount } = useCart();
  
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/work">WORK</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/shop">SHOP</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/#services">SERVICES</Link>
            </Button>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-wider text-foreground hover:text-accent transition-colors">
                WESTERN TALES
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/about">ABOUT</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/contact">CONTACT</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium" asChild>
              <Link to="/cart">CART ({getCartCount()})</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;