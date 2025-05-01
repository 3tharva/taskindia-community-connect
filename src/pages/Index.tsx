
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedTaskers from "@/components/home/FeaturedTaskers";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import TaskForm from "@/components/tasks/TaskForm";
import RecentTasks from "@/components/tasks/RecentTasks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <CategorySection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started with TaskIndia</h2>
              <p className="text-lg text-gray-600">
                Post a task or explore available services in your community
              </p>
            </div>
            
            <Tabs defaultValue="post-task" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="post-task">Post a Task</TabsTrigger>
                <TabsTrigger value="browse-tasks">Browse Tasks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="post-task">
                <TaskForm />
              </TabsContent>
              
              <TabsContent value="browse-tasks">
                <RecentTasks />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <HowItWorks />
        
        <FeaturedTaskers />
        
        <Testimonials />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
