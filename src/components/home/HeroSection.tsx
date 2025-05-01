
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-taskindia-gray overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get Your Tasks Done by <span className="gradient-text">Local Experts</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Connect with trusted service providers in your community or campus for cleaning, repairs, moving, errands, and more.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-taskindia-orange hover:bg-taskindia-orange/90"
              >
                <Link to="/post-task" className="flex items-center gap-2">
                  Post a Task
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-taskindia-teal text-taskindia-teal hover:bg-taskindia-teal/10"
              >
                <Link to="/tasks" className="flex items-center gap-2">
                  <Search size={18} /> Find Services
                </Link>
              </Button>
            </div>
            
            <div className="mt-10">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(num => (
                    <div key={num} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                      <span className="font-medium text-xs">{num}</span>
                    </div>
                  ))}
                </div>
                <span>Trusted by <span className="font-semibold">10,000+</span> users across India</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative w-full h-[400px] animate-float">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-taskindia-teal/20 absolute"></div>
                <div className="w-64 h-64 rounded-full bg-taskindia-orange/20 absolute -right-10 top-10"></div>
                
                <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 max-w-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-taskindia-orange flex items-center justify-center text-white font-bold">
                      RK
                    </div>
                    <div>
                      <h3 className="font-semibold">Rahul Kumar</h3>
                      <p className="text-sm text-gray-500">Professional Plumber</p>
                      <div className="flex items-center mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                        <span className="ml-1 text-sm text-gray-600">4.9</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-700">"I've completed over 120 tasks with 98% satisfaction rate. I specialize in plumbing and fixture installations."</p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0">
                  <div className="bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Nearest Tasker</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">1.2 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
