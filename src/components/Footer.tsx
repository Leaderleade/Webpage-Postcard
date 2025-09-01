import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-western-brown text-western-tan py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Postcard</h3>
            <p className="text-western-desert mb-6 max-w-md text-sm sm:text-base">
              intro
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-western-tan rounded-full flex items-center justify-center hover:bg-western-orange transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-western-brown" />
              </a>
              <a href="#" className="w-8 h-8 bg-western-tan rounded-full flex items-center justify-center hover:bg-western-orange transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-western-brown" />
              </a>
              <a href="#" className="w-8 h-8 bg-western-tan rounded-full flex items-center justify-center hover:bg-western-orange transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-western-brown" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-western-desert text-sm sm:text-base">
              <li>
                <Link to="/work" className="hover:text-western-orange transition-colors">Work</Link>
              </li>
              <li>
                <Link to="/kickstarter" className="hover:text-western-orange transition-colors">Kickstarter</Link>
              </li>
              <li>
                {/* <Link to="/services" className="hover:text-western-orange transition-colors">Services</Link> */}
              </li>
              <li>
                <Link to="/about" className="hover:text-western-orange transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-western-orange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-western-desert text-sm sm:text-base">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:hello@westerntales.com" className="hover:text-western-orange transition-colors">
                  hello@.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1 (555) 555-5555" className="hover:text-western-orange transition-colors">
                  +1 (555) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>UW,ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-western-desert/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-western-desert text-sm sm:text-base">
          <p>&copy; 2025 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;