
import TaskCard, { Task } from "./TaskCard";

const recentTasks: Task[] = [
  {
    id: 1,
    title: "Pick up documents from Andheri office",
    category: "Errands",
    location: "Andheri East, Mumbai",
    budget: "₹300",
    date: "May 10, 2025",
    time: "2:00 PM",
    status: "open"
  },
  {
    id: 2,
    title: "Deliver tiffin from home to office daily",
    category: "Delivery",
    location: "From Koramangala to Whitefield, Bangalore",
    budget: "₹1,500/month",
    date: "May 7, 2025",
    status: "open",
    urgent: true
  },
  {
    id: 3,
    title: "Coordinate project meeting for 15 people",
    category: "Coordination",
    location: "IIT Delhi Campus",
    budget: "₹1,200",
    date: "May 15, 2025",
    status: "open"
  },
  {
    id: 4,
    title: "Pick up medicine from pharmacy",
    category: "Errands",
    location: "Aundh, Pune",
    budget: "₹200",
    date: "May 5, 2025",
    time: "4:30 PM",
    status: "assigned"
  }
];

const RecentTasks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Recently Posted Tasks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
