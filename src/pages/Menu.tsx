
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMenu } from "@/hooks/use-menu";
import { type MenuItem } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

// Fallback menu data to use while loading or if there's an error
const menuCategories = ["starters", "mainCourses", "seafood", "desserts", "drinks"];

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
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

const MenuSkeleton = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="border rounded-lg p-4">
          <Skeleton className="h-48 w-full mb-4" />
          <Skeleton className="h-4 w-1/4 mb-2" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const { data: menuData, isLoading, error } = useMenu();
  const [activeCategory, setActiveCategory] = useState("starters");

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

            <Tabs 
              defaultValue="starters" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="max-w-4xl mx-auto"
            >
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                {menuCategories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category === 'mainCourses' ? 'Main Courses' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {isLoading ? (
                <MenuSkeleton />
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-600">Failed to load menu items.</p>
                  <p className="text-md text-gray-500">Please try again later.</p>
                </div>
              ) : (
                menuCategories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <h3 className="text-2xl font-semibold mb-6 text-restaurant-dark">
                      {category === 'mainCourses' ? 'Main Courses' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {menuData && menuData[category] ? (
                        menuData[category].map((item, index) => (
                          <MenuItemComponent key={item.id} item={item} />
                        ))
                      ) : (
                        <p className="text-gray-600 col-span-2 text-center py-8">No items available in this category.</p>
                      )}
                    </div>
                  </TabsContent>
                ))
              )}
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
