import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm" asChild>
              <Link to="/work">WORK</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm" asChild>
              <Link to="/kickstarter">KICKSTARTER</Link>
            </Button>
            {/* <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm" asChild>
              <Link to="/services">SERVICES</Link>
            </Button> */}
          </div>
          
          {/* Logo - Center on desktop, left on mobile */}
          <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-foreground hover:text-accent transition-colors">
                Placeholder
              </h1>
            </Link>
          </div>
          
          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm" asChild>
              <Link to="/about">ABOUT</Link>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm" asChild>
              <Link to="/contact">CONTACT</Link>
            </Button>
            {/* <Button variant="ghost" className="text-foreground hover:text-accent font-medium text-sm relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </Button> */}
          </div>

          {/* Mobile cart icon */}
          {/* <div className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-6 w-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </Button>
          </div> */}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-foreground hover:text-accent font-medium justify-start" asChild>
                <Link to="/work" onClick={() => setIsMenuOpen(false)}>WORK</Link>
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent font-medium justify-start" asChild>
                <Link to="/kickstarter" onClick={() => setIsMenuOpen(false)}>KICKSTARTER</Link>
              </Button>
              {/* <Button variant="ghost" className="text-foreground hover:text-accent font-medium justify-start" asChild>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</Link> */}
              {/* </Button> */}
              <Button variant="ghost" className="text-foreground hover:text-accent font-medium justify-start" asChild>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-accent font-medium justify-start" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;