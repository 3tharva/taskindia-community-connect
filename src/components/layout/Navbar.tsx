
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-taskindia-orange">Task</span>
            <span className="text-taskindia-teal">India</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-taskindia-orange font-medium">Home</Link>
          <Link to="/tasks" className="text-gray-700 hover:text-taskindia-orange font-medium">Tasks</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-taskindia-orange font-medium">How it works</Link>
          <Link to="/about" className="text-gray-700 hover:text-taskindia-orange font-medium">About us</Link>
        </nav>

        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hover:bg-taskindia-teal/10 hover:text-taskindia-teal">
            Sign in
          </Button>
          <Button className="bg-taskindia-orange hover:bg-taskindia-orange/90">
            Sign up
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 md:hidden flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-taskindia-orange font-medium">Home</Link>
            <Link to="/tasks" className="text-gray-700 hover:text-taskindia-orange font-medium">Tasks</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-taskindia-orange font-medium">How it works</Link>
            <Link to="/about" className="text-gray-700 hover:text-taskindia-orange font-medium">About us</Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full hover:bg-taskindia-teal/10 hover:text-taskindia-teal">
                Sign in
              </Button>
              <Button className="w-full bg-taskindia-orange hover:bg-taskindia-orange/90">
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
