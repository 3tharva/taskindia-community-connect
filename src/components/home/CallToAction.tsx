
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-taskindia-orange to-taskindia-teal text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-6">
              Post your task today and connect with skilled professionals in your community or campus who can help you get it done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-taskindia-orange hover:bg-gray-100">
                <Link to="/post-task" className="flex items-center gap-2">
                  Post a Task <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/tasks">Browse Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">Join TaskIndia Today</h3>
            <p className="mb-6">
              Whether you need help with everyday tasks or want to offer your services, TaskIndia connects your community.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Verified local service providers",
                "Secure payments through trusted gateways",
                "24/7 customer support",
                "Satisfaction guaranteed"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full bg-white text-taskindia-orange hover:bg-gray-100">
              <Link to="/sign-up">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
