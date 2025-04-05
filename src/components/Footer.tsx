
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-restaurant-accent">Gourmet Haven</h3>
            <p className="mb-2">123 Culinary Street</p>
            <p className="mb-2">Foodie City, FC 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@gourmethaven.com</p>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-restaurant-accent">Opening Hours</h3>
            <p className="mb-2">Monday - Friday: 11:00 am - 10:00 pm</p>
            <p className="mb-2">Saturday: 10:00 am - 11:00 pm</p>
            <p>Sunday: 10:00 am - 9:00 pm</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-restaurant-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-restaurant-accent transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-restaurant-accent transition-colors">Our Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-restaurant-accent transition-colors">Book a Table</Link></li>
              <li><Link to="/contact" className="hover:text-restaurant-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-restaurant-accent transition-colors">Login / Register</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 Gourmet Haven. All rights reserved.</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-restaurant-accent transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-restaurant-accent transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-restaurant-accent transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
