
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin, Clock, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

export type Task = {
  id: number;
  title: string;
  category: string;
  location: string;
  budget: string;
  date: string;
  time?: string;
  status: "open" | "assigned" | "completed";
  urgent?: boolean;
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow task-card-hover">
      <div className="h-2 bg-gradient-to-r from-taskindia-orange to-taskindia-teal"></div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg line-clamp-2">{task.title}</h3>
          
          <div className="flex space-x-2">
            {task.status === "open" && (
              <Badge className="bg-green-500">Open</Badge>
            )}
            {task.status === "assigned" && (
              <Badge className="bg-blue-500">Assigned</Badge>
            )}
            {task.status === "completed" && (
              <Badge className="bg-gray-500">Completed</Badge>
            )}
            {task.urgent && (
              <Badge className="bg-red-500">Urgent</Badge>
            )}
          </div>
        </div>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Badge variant="outline">{task.category}</Badge>
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{task.location}</span>
          </div>
          
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>{task.date}</span>
            {task.time && (
              <>
                <Clock className="w-4 h-4 ml-3 mr-2" />
                <span>{task.time}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center">
            <IndianRupee className="w-4 h-4 mr-2" />
            <span className="font-medium">{task.budget}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between">
        <Button asChild variant="ghost" className="text-taskindia-teal hover:text-taskindia-teal/70 hover:bg-taskindia-teal/10">
          <Link to={`/tasks/${task.id}`}>View Details</Link>
        </Button>
        
        {task.status === "open" && (
          <Button asChild className="bg-taskindia-orange hover:bg-taskindia-orange/90">
            <Link to={`/tasks/${task.id}/apply`}>Make Offer</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
