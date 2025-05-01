
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskLocation, setTaskLocation] = useState("");
  const [taskBudget, setTaskBudget] = useState("");
  const [taskDate, setTaskDate] = useState<Date | undefined>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally submit to an API
    console.log({
      title: taskTitle,
      description: taskDescription,
      category: taskCategory,
      location: taskLocation,
      budget: taskBudget,
      date: taskDate
    });
    
    // Show success toast
    toast({
      title: "Task posted successfully!",
      description: "We'll notify you when taskers respond to your request.",
    });
    
    // Reset form
    setTaskTitle("");
    setTaskDescription("");
    setTaskCategory("");
    setTaskLocation("");
    setTaskBudget("");
    setTaskDate(undefined);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Post a Task</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="task-title" className="text-base">Task Title</Label>
          <Input
            id="task-title"
            placeholder="e.g. Clean 2BHK apartment"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="task-description" className="text-base">Task Description</Label>
          <Textarea
            id="task-description"
            placeholder="Describe what you need done in detail..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="mt-1 min-h-[120px]"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="task-category" className="text-base">Category</Label>
            <Select value={taskCategory} onValueChange={setTaskCategory} required>
              <SelectTrigger id="task-category" className="mt-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cleaning">Home Cleaning</SelectItem>
                <SelectItem value="repairs">Repairs & Maintenance</SelectItem>
                <SelectItem value="moving">Moving & Delivery</SelectItem>
                <SelectItem value="errands">Errands</SelectItem>
                <SelectItem value="gardening">Gardening</SelectItem>
                <SelectItem value="academic">Academic Help</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="task-location" className="text-base">Location</Label>
            <Input
              id="task-location"
              placeholder="e.g. Prestige Lakeside Habitat, Bangalore"
              value={taskLocation}
              onChange={(e) => setTaskLocation(e.target.value)}
              required
              className="mt-1"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="task-budget" className="text-base">Budget (₹)</Label>
            <Input
              id="task-budget"
              type="number"
              placeholder="e.g. 500"
              value={taskBudget}
              onChange={(e) => setTaskBudget(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label className="text-base">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "mt-1 w-full justify-start text-left font-normal",
                    !taskDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {taskDate ? format(taskDate, "PPP") : <span>Pick a date</span>}
                  <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={taskDate}
                  onSelect={setTaskDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-taskindia-orange hover:bg-taskindia-orange/90"
        >
          Post Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
