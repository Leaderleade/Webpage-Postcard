import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              WORK
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              SHOP
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              SERVICES
            </Button>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-bold tracking-wider text-foreground">
              WESTERN TALES
            </h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              ABOUT
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              CONTACT
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent font-medium">
              CART (0)
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;