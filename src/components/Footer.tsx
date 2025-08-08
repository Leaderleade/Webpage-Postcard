const Footer = () => {
  return (
    <footer className="bg-western-brown text-western-tan py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">WESTERN TALES</h3>
            <p className="text-western-desert mb-6 max-w-md">
              Bringing the warmth and character of the old west to modern spaces through custom wallpaper and interior design.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-western-tan rounded hover:bg-western-orange transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-western-tan rounded hover:bg-western-orange transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-western-tan rounded hover:bg-western-orange transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-western-desert">
              <li><a href="#" className="hover:text-western-orange transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-western-orange transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-western-orange transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-western-orange transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-western-desert">
              <li>hello@westerntales.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Austin, Texas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-western-desert/30 mt-12 pt-8 text-center text-western-desert">
          <p>&copy; 2024 Western Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;