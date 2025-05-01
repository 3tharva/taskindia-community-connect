
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-taskindia-orange">Task</span>
              <span className="text-taskindia-teal">India</span>
            </div>
            <p className="text-gray-600">
              Connecting service providers with users in gated communities and university campuses across India.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-taskindia-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-taskindia-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-taskindia-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-taskindia-orange">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-1">Quick Links</h3>
            <Link to="/" className="text-gray-600 hover:text-taskindia-orange">Home</Link>
            <Link to="/tasks" className="text-gray-600 hover:text-taskindia-orange">Browse Tasks</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-taskindia-orange">How it Works</Link>
            <Link to="/about" className="text-gray-600 hover:text-taskindia-orange">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-taskindia-orange">Contact</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-1">Categories</h3>
            <Link to="/tasks/cleaning" className="text-gray-600 hover:text-taskindia-orange">Cleaning</Link>
            <Link to="/tasks/repairs" className="text-gray-600 hover:text-taskindia-orange">Repairs</Link>
            <Link to="/tasks/moving" className="text-gray-600 hover:text-taskindia-orange">Moving</Link>
            <Link to="/tasks/errands" className="text-gray-600 hover:text-taskindia-orange">Errands</Link>
            <Link to="/tasks/gardening" className="text-gray-600 hover:text-taskindia-orange">Gardening</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg mb-1">Contact Us</h3>
            <a href="mailto:info@taskindia.com" className="text-gray-600 hover:text-taskindia-orange flex items-center gap-2">
              <Mail size={16} /> info@taskindia.com
            </a>
            <a href="tel:+911234567890" className="text-gray-600 hover:text-taskindia-orange flex items-center gap-2">
              <Phone size={16} /> +91 123 456 7890
            </a>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin size={16} /> Bengaluru, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">© 2025 TaskIndia. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-taskindia-orange">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-taskindia-orange">Privacy Policy</Link>
            <Link to="/faq" className="text-gray-500 text-sm hover:text-taskindia-orange">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
