import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
         <Button> 
              variant="outline" 
              size="lg"
              className="mt-8 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-4"
              asChild
            
              <Link to="/about">LEARN MORE</Link>
            </Button>
      </div>
    </div>
  );
};

export default NotFound;
