// src/taskManager.js

const tasks = []; // Store tasks in an array

// Function to validate task fields
function isValidTask(task) {
    if (!task.title || !task.description || !task.assignedTo || !task.status || !task.priority || !task.dueDate) {
        return false;
    }
    return true;
}

// Function to add a new task
function addTask(task) {
    if (!isValidTask(task)) {
        throw new Error("Invalid task: Missing required fields.");
    }

    const existingTask = tasks.find(t => t.title === task.title);
    if (existingTask) {
        throw new Error("Task title must be unique.");
    }

    tasks.push(task);
    return task;
}

// Function to read a task by title
function readTask(title) {
    const task = tasks.find(t => t.title === title);
    return task || "Task not found";
}

// Function to update an existing task
function updateTask(title, updatedDetails) {
    const index = tasks.findIndex(t => t.title === title);
    if (index === -1) {
        return "Task not found";
    }

    tasks[index] = { ...tasks[index], ...updatedDetails };
    return tasks[index];
}

// Function to delete a task by title
function deleteTask(title) {
    const index = tasks.findIndex(t => t.title === title);
    if (index === -1) {
        return "Task not found";
    }

    tasks.splice(index, 1);
    return "Task deleted successfully";
}

// Export functions
module.exports = {
    addTask,
    readTask,
    updateTask,
    deleteTask,
    tasks // Exposing tasks array for testing purposes
};