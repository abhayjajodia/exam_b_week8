const TaskManager = require("./taskManager");

// Add a new blog post
console.log(TaskManager.addTask({
    "title": "Complete JavaScript Assignment",
    "description": "Finish the project for JavaScript course.",
    "assignedTo": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "status": "pending", // Can be "pending", "in-progress", or "completed"
    "priority": "high", // Can be "low", "medium", or "high"
    "dueDate": "2024-10-15",
    "comments": [
      {
        "user": "Jane Doe",
        "message": "Let me know if you need help!",
        "date": "2024-10-10"
      }
    ],
    "tags": ["JavaScript", "Assignment"]
  }));

// Read the task post
console.log(TaskManager.readTask("Complete JavaScript Assignment"));

// Update the blog post
TaskManager.updateTask("Complete JavaScript Assignment", { likes: 150 });
console.log(TaskManager.readTask("Complete JavaScript Assignment"));

// Delete the blog post
TaskManager.deleteTask("Complete JavaScript Assignment");
console.log(TaskManager.readTask("Complete JavaScript Assignment")); // Should print "Post not found"