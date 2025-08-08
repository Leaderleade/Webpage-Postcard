import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-western-desert to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how we can bring Western charm to your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send us a message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Office</h3>
                  <p className="text-muted-foreground">
                    123 Western Trail<br />
                    Austin, Texas 78701<br />
                    United States
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Get in touch</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> hello@westerntales.com
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Hours:</strong> Mon-Fri 9AM-6PM CST
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Follow us</h3>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-western-orange rounded hover:bg-western-rust transition-colors cursor-pointer"></div>
                    <div className="w-10 h-10 bg-western-orange rounded hover:bg-western-rust transition-colors cursor-pointer"></div>
                    <div className="w-10 h-10 bg-western-orange rounded hover:bg-western-rust transition-colors cursor-pointer"></div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-[4/3] bg-gradient-to-br from-western-wood to-western-brown rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                  alt="Western Tales Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;