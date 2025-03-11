// tests/taskManager.test.js

const { addTask, readTask, updateTask, deleteTask, tasks } = require("./taskManager");

// Reset tasks before each test
beforeEach(() => {
    tasks.length = 0;
});

test("should add a valid task", () => {
    const task = {
        title: "Complete JavaScript Assignment",
        description: "Finish the project for JavaScript course.",
        assignedTo: { name: "John Doe", email: "john@example.com" },
        status: "pending",
        priority: "high",
        dueDate: "2024-10-15",
        comments: [],
        tags: ["JavaScript", "Assignment"]
    };

    expect(addTask(task)).toEqual(task);
});

test("should not add a task with missing fields", () => {
    expect(() => addTask({ title: "Incomplete Task" })).toThrow("Invalid task: Missing required fields.");
});

test("should not add a duplicate task", () => {
    const task = {
        title: "Duplicate Task",
        description: "Test task.",
        assignedTo: { name: "Jane Doe", email: "jane@example.com" },
        status: "pending",
        priority: "medium",
        dueDate: "2024-11-01",
        comments: [],
        tags: ["Test"]
    };

    addTask(task);
    expect(() => addTask(task)).toThrow("Task title must be unique.");
});

test("should read an existing task", () => {
    const task = {
        title: "Read Task",
        description: "Testing read functionality.",
        assignedTo: { name: "Alice", email: "alice@example.com" },
        status: "pending",
        priority: "low",
        dueDate: "2024-12-01",
        comments: [],
        tags: ["Read"]
    };

    addTask(task);
    expect(readTask("Read Task")).toEqual(task);
});

test("should return 'Task not found' for non-existing task", () => {
    expect(readTask("Non-existent Task")).toBe("Task not found");
});

test("should update an existing task", () => {
    const task = {
        title: "Update Test",
        description: "This task will be updated.",
        assignedTo: { name: "Bob", email: "bob@example.com" },
        status: "pending",
        priority: "medium",
        dueDate: "2024-09-30",
        comments: [],
        tags: ["Update"]
    };

    addTask(task);
    const updatedTask = updateTask("Update Test", { status: "completed" });
    expect(updatedTask.status).toBe("completed");
});

test("should delete an existing task", () => {
    const task = {
        title: "Delete Test",
        description: "This task will be deleted.",
        assignedTo: { name: "Charlie", email: "charlie@example.com" },
        status: "in-progress",
        priority: "high",
        dueDate: "2024-08-20",
        comments: [],
        tags: ["Delete"]
    };

    addTask(task);
    expect(deleteTask("Delete Test")).toBe("Task deleted successfully");
});

test("should return 'Task not found' when deleting a non-existing task", () => {
    expect(deleteTask("Unknown Task")).toBe("Task not found");
});