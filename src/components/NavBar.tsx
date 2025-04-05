
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-restaurant-primary">
          Gourmet Haven
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/menu" className="nav-link">Menu</Link></li>
            <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-restaurant-dark hover:text-restaurant-primary">
              Login
            </Button>
          </Link>
          <Link to="/reservations">
            <Button className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white">
              Book a Table
            </Button>
          </Link>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                to="/" 
                className="block py-2 px-4 hover:bg-restaurant-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className="block py-2 px-4 hover:bg-restaurant-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/reservations" 
                className="block py-2 px-4 hover:bg-restaurant-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-2 px-4 hover:bg-restaurant-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="block py-2 px-4 hover:bg-restaurant-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
