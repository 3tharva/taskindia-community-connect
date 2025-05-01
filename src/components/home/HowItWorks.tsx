
import { ArrowRight, ClipboardList, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Post your task",
    description: "Describe what you need done, when, and your budget",
    icon: <ClipboardList className="w-10 h-10" />,
    color: "bg-taskindia-orange text-white"
  },
  {
    id: 2,
    title: "Choose a Tasker",
    description: "Browse profiles, compare reviews and select the right person",
    icon: <Search className="w-10 h-10" />,
    color: "bg-taskindia-teal text-white"
  },
  {
    id: 3,
    title: "Get it done",
    description: "The Tasker completes your task and you only pay when satisfied",
    icon: <CheckCircle className="w-10 h-10" />,
    color: "bg-blue-500 text-white"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-taskindia-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How TaskIndia Works</h2>
          <p className="text-lg text-gray-600">
            Getting help is simple, secure, and guaranteed
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className={`${step.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute top-16 right-0 transform translate-x-1/2 hidden md:block">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3">Step {step.id}: {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
