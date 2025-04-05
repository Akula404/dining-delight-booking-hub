
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Menu data
const menuData = {
  starters: [
    {
      name: "Artisanal Cheese Plate",
      description: "Selection of premium cheeses served with honey, nuts, and artisan crackers",
      price: "$16",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=500&auto=format&fit=crop",
      tags: ["Vegetarian"],
    },
    {
      name: "Tuna Tartare",
      description: "Fresh tuna with avocado, soy-lime dressing, and wonton crisps",
      price: "$18",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature", "Seafood"],
    },
    {
      name: "Crispy Calamari",
      description: "Tender calamari fried to perfection, served with spicy aioli",
      price: "$14",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500&auto=format&fit=crop",
      tags: ["Popular", "Seafood"],
    },
    {
      name: "Wild Mushroom Bruschetta",
      description: "Toasted artisan bread topped with sautéed wild mushrooms and truffle oil",
      price: "$13",
      image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=500&auto=format&fit=crop",
      tags: ["Vegetarian"],
    },
  ],
  mainCourses: [
    {
      name: "Filet Mignon",
      description: "8oz grass-fed beef with garlic mashed potatoes and seasonal vegetables",
      price: "$38",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature", "Popular"],
    },
    {
      name: "Pan-Seared Salmon",
      description: "Wild-caught salmon with lemon butter sauce, quinoa, and asparagus",
      price: "$29",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=500&auto=format&fit=crop",
      tags: ["Healthy", "Seafood"],
    },
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with wild mushrooms and truffle oil",
      price: "$24",
      image: "https://images.unsplash.com/photo-1633964913295-ceb43be9dab4?q=80&w=500&auto=format&fit=crop",
      tags: ["Vegetarian", "Gluten-Free"],
    },
    {
      name: "Braised Short Ribs",
      description: "Slow-cooked short ribs with red wine reduction and creamy polenta",
      price: "$32",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
      tags: ["Popular"],
    },
  ],
  seafood: [
    {
      name: "Grilled Octopus",
      description: "Tender octopus with fingerling potatoes, chorizo, and paprika oil",
      price: "$26",
      image: "https://images.unsplash.com/photo-1564671546498-bbc2e02ba6c9?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature", "Seafood"],
    },
    {
      name: "Lobster Linguine",
      description: "House-made pasta with fresh Maine lobster in a light cream sauce",
      price: "$42",
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=500&auto=format&fit=crop",
      tags: ["Popular", "Seafood"],
    },
    {
      name: "Seafood Paella",
      description: "Traditional Spanish rice dish with shrimp, mussels, clams, and chorizo",
      price: "$34",
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature"],
    },
  ],
  desserts: [
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: "$12",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature", "Popular"],
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard with caramelized sugar top",
      price: "$10",
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=500&auto=format&fit=crop",
      tags: ["Gluten-Free"],
    },
    {
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers with mascarpone cream",
      price: "$11",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&auto=format&fit=crop",
      tags: ["Popular"],
    },
    {
      name: "Seasonal Fruit Tart",
      description: "Buttery pastry shell filled with vanilla custard and topped with fresh seasonal fruit",
      price: "$9",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=500&auto=format&fit=crop",
      tags: ["Seasonal"],
    },
  ],
  drinks: [
    {
      name: "Signature Martini",
      description: "House-infused vodka with vermouth and a twist",
      price: "$14",
      image: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=500&auto=format&fit=crop",
      tags: ["Signature", "Cocktail"],
    },
    {
      name: "Barrel-Aged Old Fashioned",
      description: "Bourbon, bitters, sugar, aged in oak barrels",
      price: "$16",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=500&auto=format&fit=crop",
      tags: ["Popular", "Whiskey"],
    },
    {
      name: "Sommelier's Wine Selection",
      description: "Ask your server about our premium wine selection",
      price: "Varies",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop",
      tags: ["Wine"],
    },
  ],
};

const MenuItem = ({ item }: { item: typeof menuData.starters[0] }) => {
  return (
    <div className="menu-item">
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex gap-2 mb-2">
        {item.tags.map((tag, index) => (
          <span 
            key={index}
            className="inline-block px-2 py-0.5 text-xs bg-restaurant-primary/10 text-restaurant-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{item.price}</span>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="hero-image h-[40vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Menu
              </h1>
              <p className="text-xl text-white/90">
                Culinary delights crafted with passion
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Exquisite Cuisine</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our menu features a carefully curated selection of dishes that highlight 
                seasonal ingredients and global culinary techniques.
              </p>
            </div>

            <Tabs defaultValue="starters" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                <TabsTrigger value="starters">Starters</TabsTrigger>
                <TabsTrigger value="mainCourses">Main Courses</TabsTrigger>
                <TabsTrigger value="seafood">Seafood</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
              </TabsList>

              <TabsContent value="starters">
                <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">Starters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuData.starters.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mainCourses">
                <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">Main Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuData.mainCourses.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seafood">
                <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">Seafood</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuData.seafood.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="desserts">
                <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">Desserts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuData.desserts.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drinks">
                <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">Drinks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuData.drinks.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Our menu changes seasonally to showcase the freshest ingredients.
                Please inform your server of any dietary restrictions or allergies.
              </p>
              <Link to="/reservations">
                <Button className="bg-restaurant-primary hover:bg-restaurant-primary/90">
                  Book a Table
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Chef's Note */}
        <section className="py-16 bg-restaurant-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-6">A Note From Our Chef</h2>
              <p className="text-lg italic mb-4">
                "Our menu is a celebration of flavors from around the world, crafted with locally-sourced 
                ingredients and a deep respect for culinary traditions. Each dish tells a story and 
                invites you to experience the passion that goes into our cuisine."
              </p>
              <p className="font-semibold">— Chef Michael Laurent</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
