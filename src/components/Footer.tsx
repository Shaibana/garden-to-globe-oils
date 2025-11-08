import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logoHerb from "@/assets/logo-herb.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center p-2 animate-pulse">
                <img src={logoHerb} alt="M M Abdul Hameed and Sons Logo" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-serif text-xl font-semibold">M M Abdul Hameed and Sons</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pure. Natural. Trusted Worldwide. Wholesale essential oils from nature's finest gardens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quality & Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Essential Oils</li>
              <li className="text-sm text-muted-foreground">Carrier Oils</li>
              <li className="text-sm text-muted-foreground">Aromatherapy Blends</li>
              <li className="text-sm text-muted-foreground">Natural Extracts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>info@mmabdulhameed.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+91 484 123 4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Hameed Estate, Ashokapuram, Alwaye</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} M.M. Abdul Hameed & Sons. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
