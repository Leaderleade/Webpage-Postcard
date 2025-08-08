const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe we are deserving of color and pattern in our lives, and that they can be harnessed to tell our stories, create connection, and inspire joy in our homes, communities and around the world. Learn more about my range of residential and commercial services below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-western-orange to-western-rust rounded-full mx-auto mb-6 w-32 h-32 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Custom Wallpaper"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Custom Wallpaper</h3>
            <p className="text-muted-foreground">Bespoke western-themed wallpaper designs for residential and commercial spaces.</p>
          </div>

          {/* Service 2 */}
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-western-wood to-western-brown rounded-full mx-auto mb-6 w-32 h-32 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Interior Design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Interior Design</h3>
            <p className="text-muted-foreground">Complete interior design services bringing authentic western charm to modern spaces.</p>
          </div>

          {/* Service 3 */}
          <div className="text-center group">
            <div className="aspect-square bg-gradient-to-br from-western-tan to-western-desert rounded-full mx-auto mb-6 w-32 h-32 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/6aadcdf1-c1a8-402e-8d77-df5445aee24b.png"
                alt="Consultation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Design Consultation</h3>
            <p className="text-muted-foreground">Expert guidance on incorporating western elements into your existing design aesthetic.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;