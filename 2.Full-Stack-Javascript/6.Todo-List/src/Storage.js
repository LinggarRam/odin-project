import Project from "./Project.js";
import Todo from "./Todo.js";

const STORAGE_KEY = "todoapp-projects";

const Storage = {
    saveProjects(projects) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    },

    loadProjects() {
        const data = localStorage.getItem(STORAGE_KEY);

        if(!data) {
            const inbox = new project("Inbox");
            inbox.addTodo(
                "Welcome to Todo App!",
                "This is your firts todo. Click + Add Todo to create more.",
                new Date().toISOString().split("T")[0],
                "low",
                "You can delete this Todo anytime."
            );
            return [inbox];
        }

        const parsed = JSON.parse(data);

        return parsed.map((projectData) => {
            const project = Object.assign(new Project(""), projectData);

            project.todos = projectData.todos.map((todoData) => {
                return Object.assign(new Todo("", "", "", ""), todoData);
            });

            return project;
        });
    },
};

export default Storage;