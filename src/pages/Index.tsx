
import { Link } from "react-router-dom";
import { ChefHat, Clock, MapPin, Phone, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The dining experience at Gourmet Haven was exceptional! The flavors were divine and the ambiance perfect for our anniversary dinner.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Best restaurant in town! The chef's special was absolutely delicious and the service was impeccable.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    text: "I've been here multiple times and each visit exceeds expectations. The seasonal menu is always innovative and exciting.",
    rating: 4,
  },
];

// Featured dishes
const featuredDishes = [
  {
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with wild mushrooms and truffle oil",
    price: "$24.99",
    category: "Main Course",
    imgUrl: "https://images.unsplash.com/photo-1633964913295-ceb43be9dab4?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Seared Scallops",
    description: "Fresh scallops with cauliflower purée and crispy prosciutto",
    price: "$29.99",
    category: "Appetizer",
    imgUrl: "https://images.unsplash.com/photo-1585702079207-0a6324a71a27?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Chocolate Soufflé",
    description: "Decadent warm soufflé with vanilla bean ice cream",
    price: "$12.99",
    category: "Dessert",
    imgUrl: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500&auto=format&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-image pt-16 flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop')"}}>
        <div className="container mx-auto px-4">
          <div className="bg-black/50 p-8 md:p-12 rounded-lg max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Exquisite Dining Experience
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Indulge in culinary masterpieces crafted with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reservations">
                <Button size="lg" className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white font-medium">
                  Book a Table
                </Button>
              </Link>
              <Link to="/menu">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-restaurant-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 2010, Gourmet Haven has been serving exceptional cuisine 
                in a warm, inviting atmosphere. Our chef brings over 20 years of culinary 
                expertise from around the world to create dishes that excite the palate.
              </p>
              <p className="text-lg mb-8">
                We pride ourselves on using locally-sourced ingredients and sustainable 
                practices to deliver not just a meal, but an unforgettable dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <ChefHat className="text-restaurant-primary mr-2" size={20} />
                  <span>Expert Chefs</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="text-restaurant-primary mr-2" size={20} />
                  <span>Seasonal Menu</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-restaurant-primary mr-2" size={20} />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?q=80&w=600&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Dishes</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Experience our chef's signature creations, crafted with the finest ingredients and 
            presented with artistic flair.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="menu-item">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={dish.imgUrl} 
                    alt={dish.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-restaurant-primary/10 text-restaurant-primary text-sm rounded-full mb-2">
                  {dish.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{dish.price}</span>
                  <Link to="/menu">
                    <Button variant="outline" className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-restaurant-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Table Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of exquisite cuisine, elegant atmosphere, and impeccable service.
          </p>
          <Link to="/reservations">
            <Button size="lg" className="bg-white text-restaurant-primary hover:bg-white/90">
              Book a Reservation
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-restaurant-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-restaurant-accent fill-restaurant-accent" size={18} />
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-restaurant-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p>Mon-Fri: 11am - 10pm</p>
              <p>Sat-Sun: 10am - 11pm</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-restaurant-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p>123 Culinary Street</p>
              <p>Foodie City, FC 12345</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-restaurant-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@gourmethaven.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-restaurant-primary/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-restaurant-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Events</h3>
              <p>Host your special event</p>
              <p>Call for details</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
