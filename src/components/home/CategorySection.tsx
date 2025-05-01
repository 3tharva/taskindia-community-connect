
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Settings, Truck, ShoppingBag, Flower2, PenBox, BookOpen } from "lucide-react";

const categories = [
  { 
    id: 1, 
    name: "Home Cleaning", 
    icon: <Home className="w-6 h-6" />, 
    color: "bg-blue-100", 
    iconColor: "text-blue-500",
    description: "House cleaning, deep cleaning, and more" 
  },
  { 
    id: 2, 
    name: "Repairs & Maintenance", 
    icon: <Settings className="w-6 h-6" />, 
    color: "bg-green-100", 
    iconColor: "text-green-500",
    description: "Plumbing, electrical work, and appliance repairs" 
  },
  { 
    id: 3, 
    name: "Moving & Delivery", 
    icon: <Truck className="w-6 h-6" />, 
    color: "bg-purple-100", 
    iconColor: "text-purple-500",
    description: "Furniture moving, package delivery, and more" 
  },
  { 
    id: 4, 
    name: "Errands", 
    icon: <ShoppingBag className="w-6 h-6" />, 
    color: "bg-yellow-100", 
    iconColor: "text-yellow-600",
    description: "Shopping, picking up prescriptions, and deliveries" 
  },
  { 
    id: 5, 
    name: "Gardening", 
    icon: <Flower2 className="w-6 h-6" />, 
    color: "bg-green-100", 
    iconColor: "text-green-500",
    description: "Lawn mowing, plant care, and landscaping" 
  },
  { 
    id: 6, 
    name: "Academic Help", 
    icon: <BookOpen className="w-6 h-6" />, 
    color: "bg-red-100", 
    iconColor: "text-red-500",
    description: "Notes, tutoring, and assignment assistance" 
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Task Categories</h2>
          <p className="text-lg text-gray-600">
            Choose from a wide variety of services offered by verified local experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {categories.map((category) => (
            <Link key={category.id} to={`/tasks/${category.name.toLowerCase().replace(/ /g, '-')}`}>
              <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center transition-all task-card-hover">
                <div className={`${category.color} p-4 rounded-full mb-4`}>
                  <div className={category.iconColor}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-taskindia-teal text-taskindia-teal hover:bg-taskindia-teal/10">
            <Link to="/tasks">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
