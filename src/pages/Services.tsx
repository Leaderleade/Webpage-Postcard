import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Home, Ruler, Lightbulb, Clock, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Wallpaper Design",
      description: "Unique wallpaper patterns inspired by western aesthetics and your personal style.",
      features: ["Original artwork", "Multiple color schemes", "Digital mockups", "Print-ready files"],
      price: "Starting at $500"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Interior Design Consultation",
      description: "Complete room makeovers with western-themed design elements and modern comfort.",
      features: ["3D room visualization", "Furniture recommendations", "Color palette planning", "Styling guide"],
      price: "Starting at $1,200"
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Space Planning",
      description: "Optimize your space layout with functional and beautiful western-inspired arrangements.",
      features: ["Floor plan analysis", "Furniture placement", "Traffic flow optimization", "Storage solutions"],
      price: "Starting at $800"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, space requirements, and style preferences to understand your needs."
    },
    {
      step: "02", 
      title: "Design Development",
      description: "Our team creates custom designs and concepts tailored to your space and western aesthetic."
    },
    {
      step: "03",
      title: "Revision & Refinement",
      description: "We work together to perfect the design until it matches your exact vision."
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Receive your completed designs with all necessary files and implementation guidance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-warm pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Western Design Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your space with authentic western charm and modern sophistication. 
            From custom wallpaper to complete room makeovers, we bring the spirit of the west to your home.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional design services that blend western heritage with contemporary living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="text-accent mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-accent-foreground">
                      {service.price}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to bring your western design dreams to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create something beautiful together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;