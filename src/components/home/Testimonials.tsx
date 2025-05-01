
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Prestige Lakeside Habitat, Bangalore",
    image: "https://i.pravatar.cc/150?img=59",
    text: "TaskIndia has made life so much easier in our gated community. I found a reliable plumber when our bathroom was flooding and he arrived within an hour!",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Reddy",
    location: "IIT Madras Campus",
    image: "https://i.pravatar.cc/150?img=49",
    text: "As a busy student, I barely had time to move between hostels. The Taskers helped me pack and move all my stuff within 2 hours. Incredibly efficient service!",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Mehta",
    location: "Hiranandani Gardens, Mumbai",
    image: "https://i.pravatar.cc/150?img=65",
    text: "Found a fantastic gardener through TaskIndia who maintains our balcony garden every week. The app is super easy to use and the service quality is excellent.",
    rating: 4
  },
  {
    id: 4,
    name: "Divya Joshi",
    location: "Delhi University Campus",
    image: "https://i.pravatar.cc/150?img=45",
    text: "I needed notes urgently before my exam and found a senior student through TaskIndia who delivered handwritten notes to my hostel. Saved my semester!",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const visibleCount = 3; // Number of testimonials to show at once
  
  useEffect(() => {
    updateVisibleTestimonials();
  }, [activeIndex]);
  
  const updateVisibleTestimonials = () => {
    const startIndex = activeIndex % testimonials.length;
    let selected = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % testimonials.length;
      selected.push(testimonials[index]);
    }
    
    setVisibleTestimonials(selected);
  };
  
  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-taskindia-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Read about experiences from our community of users and taskers
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonials[activeIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            
            <p className="text-gray-600">"{testimonials[activeIndex].text}"</p>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
