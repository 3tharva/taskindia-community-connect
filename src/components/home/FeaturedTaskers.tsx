
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";

const taskers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Cleaning Expert",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4.9,
    reviews: 127,
    completedTasks: 156,
    verifications: ["Background Check", "ID"],
    skills: ["Deep Cleaning", "Regular Cleaning", "Window Cleaning"],
    price: "₹250/hr"
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Handyman & Repairs",
    image: "https://i.pravatar.cc/150?img=68",
    rating: 4.8,
    reviews: 92,
    completedTasks: 103,
    verifications: ["Background Check", "ID", "Phone"],
    skills: ["Plumbing", "Electrical", "Furniture Assembly"],
    price: "₹300/hr"
  },
  {
    id: 3,
    name: "Neha Singh",
    role: "Moving Assistant",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 4.7,
    reviews: 73,
    completedTasks: 81,
    verifications: ["ID", "Phone"],
    skills: ["Furniture Moving", "Packing", "Heavy Lifting"],
    price: "₹280/hr"
  }
];

const FeaturedTaskers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Featured Taskers</h2>
          <p className="text-lg text-gray-600">
            Skilled professionals ready to help with your tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {taskers.map((tasker) => (
            <div key={tasker.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-taskindia-teal/30 to-taskindia-orange/30 p-6 text-center">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mx-auto">
                  <img src={tasker.image} alt={tasker.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl mt-4">{tasker.name}</h3>
                <p className="text-gray-600">{tasker.role}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium ml-1">{tasker.rating}</span>
                  <span className="text-gray-500 ml-1">({tasker.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tasker.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-4 pb-2">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>{tasker.completedTasks} tasks completed</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Verified: {tasker.verifications.join(", ")}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-bold text-lg">{tasker.price}</div>
                  <Button asChild size="sm" className="bg-taskindia-orange hover:bg-taskindia-orange/90">
                    <Link to={`/tasker/${tasker.id}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-taskindia-teal text-taskindia-teal hover:bg-taskindia-teal/10">
            <Link to="/taskers">Browse All Taskers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTaskers;
