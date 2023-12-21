// Load environment variables from a .env file
require('dotenv').config();

// Import the Todoist API wrapper for TypeScript
const {TodoistApi} = require('@doist/todoist-api-typescript');

// Initialize the Todoist API with the API key from environment variables
const api = new TodoistApi(process.env.API_KEY);

// Function to get all projects of the authenticated user
async function getUserProjects(){
    try {
        // Fetch and return the projects from Todoist
        const projects = await api.getProjects();
        return projects;
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('error', error);
    }
}

// Function to get tasks of a specific project
async function getTasks(projectId){
    try {
        // Fetch and return tasks of a given project
        const tasks = await api.getTasks({projectId});
        return tasks;
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('error', error);
    }
}

// Function to create a new task in a specified project
async function createTask(projectId, taskContent){
    try {
        // Add a new task with the given content to the specified project
        const newTask = await api.addTask({
            content: taskContent, projectId
        });
        return newTask;
    } catch (error) {
        // Log any errors that occur during the creation of the task
        console.error('error', error);
    }
}

// Function to mark a task as completed
async function markTaskAsCompleted(taskId){
    try {
        // Mark the specified task as completed
        const taskCompleted = await api.closeTask(taskId);
        return taskCompleted;
    } catch (error) {
        // Log any errors that occur while marking the task as completed
        console.error('error', error);
    }
}

// Self-invoking async function to run the above-defined operations
(async () => {
    // Fetch and log all user projects
    const projects = await getUserProjects();
    console.log(projects);

    // Create a new task in the first project and log it
    const newTask = await createTask(projects[0].id, "Record video");
    console.log(newTask);

    // Fetch and log tasks of the first project
    const tasks = await getTasks(projects[0].id);
    console.log(tasks);

    // Mark the newly created task as completed and log the result
    const completedTask = await markTaskAsCompleted(newTask.id);
    console.log(completedTask);

    // Fetch and log tasks of the first project after completing a task
    const tasksAfterComplete = await getTasks(projects[0].id);
    console.log(tasksAfterComplete);

})() // End of self-invoking function
