
import TaskCard, { Task } from "./TaskCard";

const recentTasks: Task[] = [
  {
    id: 1,
    title: "Deep clean 2BHK apartment",
    category: "Cleaning",
    location: "Prestige Lakeside Habitat, Bangalore",
    budget: "₹1,500",
    date: "May 10, 2025",
    time: "10:00 AM",
    status: "open"
  },
  {
    id: 2,
    title: "Fix bathroom sink leakage",
    category: "Repairs",
    location: "IIT Madras Campus",
    budget: "₹800",
    date: "May 7, 2025",
    status: "open",
    urgent: true
  },
  {
    id: 3,
    title: "Help moving from hostel to PG",
    category: "Moving",
    location: "Delhi University North Campus",
    budget: "₹2,000",
    date: "May 15, 2025",
    status: "open"
  },
  {
    id: 4,
    title: "Weekly grocery shopping",
    category: "Errands",
    location: "Hiranandani Gardens, Mumbai",
    budget: "₹500",
    date: "May 5, 2025",
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
