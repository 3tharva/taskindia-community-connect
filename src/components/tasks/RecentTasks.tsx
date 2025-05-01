
import TaskCard, { Task } from "./TaskCard";

const recentTasks: Task[] = [
  {
    id: 1,
    title: "Help elderly resident replace TV remote batteries",
    category: "Quick Help",
    location: "Tower B, Floor 3, Silver Springs Society",
    budget: "₹100",
    date: "May 10, 2025",
    time: "2:00 PM",
    status: "open"
  },
  {
    id: 2,
    title: "Need someone to carry groceries up to 5th floor (no elevator)",
    category: "Assistance",
    location: "Maple Heights, Block C, Delhi",
    budget: "₹150",
    date: "May 7, 2025",
    status: "open",
    urgent: true
  },
  {
    id: 3,
    title: "Borrow DSLR camera for weekend project",
    category: "Rental",
    location: "IIT Delhi Campus, Hauz Khas",
    budget: "₹500/weekend",
    date: "May 12, 2025",
    status: "open"
  },
  {
    id: 4,
    title: "Need textbook 'Advanced Engineering Mathematics' for exam prep",
    category: "Campus Rental",
    location: "Hostel 5, BITS Pilani Campus",
    budget: "₹200/week",
    date: "May 8, 2025",
    time: "3:00 PM",
    status: "open"
  },
  {
    id: 5,
    title: "Borrow formal suit for interview (size 40)",
    category: "Rental",
    location: "DLF Phase 2, Gurgaon",
    budget: "₹300/day",
    date: "May 15, 2025",
    status: "open"
  },
  {
    id: 6,
    title: "Pick up medicine for hostel mate with fever",
    category: "Errands",
    location: "Hostel 5, BITS Pilani Campus",
    budget: "₹100 + medicine cost",
    date: "May 5, 2025",
    time: "4:30 PM",
    status: "assigned"
  }
];

const RecentTasks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Recently Posted Tasks & Rentals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
