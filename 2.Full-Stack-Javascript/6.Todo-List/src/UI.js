import { format, isPact, isToday, parseISO } from "date-fns";
import Storage from "./Storage.js";

let projects = Storage.loadProjects();
let activeProjectId = projects[0]?.id || null;

const getActiveProject = () => 
    projects.find((p) => p.id === activeProjectId);

const renderprojects = () => {
    const list = document.getElementById("project-list");
    list.innerHTML = "";

    projects.forEach((project) => {
        const li = document.createElement("li");
        li.classList.add("project-item");

        if (project.id === activeProjectId) li.classList.add("active");
        li.dataset.id = project.id;
        
        li.innerHTML = `
            <span class="project-item-name">📁 ${project.name}</span>
            <span class="project-count">${project.getPendingCount()}</span>
            ${project.name !== "📥 Inbox"
                ? `<button class="btn-delete-project" data-id="${project.id}" title="Delete project">✕</button>`
                : ""}
        `;

        li.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-delete-project")) return;
            
            activeProjectId = project.id;
            renderprojects();
            renderTodos();
        });

        const btnDelete = li.querySelector(".btn-delete-project");
        if (btnDelete) {
            btnDelete.addEventListener("click", (e) => {
                e.stopPropagation();
                if (confirm(`Delete project "${project.name}"?`)) {
                    projects = projects.filter((p) => p.id !== project.id);
                    if (activeProjectId === project.id) {
                        activeProjectId = projects[0]?.id || null;
                    }
                    Storage.saveProjects(projects);
                    renderprojects();
                    renderTodos();
                }
            });
        }

        list.appendChild(li);
    });
};

const renderTodos = () => {
    const todoList = document.getElementById("todo-list");
    const projectTitle = document.getElementById("project-title");
    const activeProject = getActiveProject();

    if (!activeProject) {
        projectTitle.textContent = "No Projects";
        todoList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📂</div>
                <h3>No projects yet</h3>
                <p>Create a new project to get started</p>
            </div>`;
        return;
    }

    projectTitle.textContent = activeProject.name;

    if (activeProject.todos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎉</div>
                <h3>All done!</h3>
                <p>Click "+ Add Todo" to create a new task</p>
            </div>`;
        return;
    }

    todoList.innerHTML = "";

    activeProject.todos.forEach((todo) => {
        const card = document.createElement("div");
        card.classList.add("todo-card", `priority-${todo.priority}`);
        if (todo.completed) card.classList.add("completed");
        card.dataset.id = todo.id;

        let dateDisplay = "";
        let dateClass = "todo-date";
        try {
            const date = parseISO(todo.dueDate);
            if (isToday(date)) {
                dateDisplay = "📅 Today";
                dateClass = " overdue";
            } else if (isPast(date) && !todo.completed) {
                dateDisplay = `⚠️ ${format(date, "MMM d, yyyy")}`;
                dateClass = " overdue"
            } else {
                dateDisplay = `📅 ${format(date, "MMM d, yyyy")}`;
            }
        } catch {
            dateDisplay = todo.dueDate;
        }

        card.innerHTML = `
            <div class="todo-checkbox ${todo.completed ? "checked" : ""}"
                data-id="${todo.id}" title="Mark complete">
                ${todo.completed ? "✓" : ""}
            </div>
            <div class="todo-body">
                <div class="todo-title">${todo.title}</div>
                <div class="todo-meta">
                    <span class="${dateClass}">${dateDisplay}</span>
                    <span class="todo-priority">${todo.priority}</span>
                </div>
                ${todo.description
                    ? `<div class="todo-desc">${todo.description}</div>`
                    : ""}
                ${todo.notes
                    ? `<div class="todo-notes">📝 ${todo.notes}</div>`
                    : ""}
            </div>
            <div class="todo-actions">
                <button class="btn-todo-action btn-edit" data-id="${todo.id}" title="Edit">✏️</button>
                <button class="btn-todo-action btn-delete" data-id="${todo.id}" title="Delete">🗑️</button>
            </div>
        `;

        card.querySelector(".todo-checkbox").addEventListener("click", () => {
            todo.toggleComplete();
            Storage.saveProjects(projects);
            renderprojects();
            renderTodos();
        });

        card.querySelector(".btn-edit").addEventListener("click", () => {
            openEditTodoDialog(todo);
        });

        card.querySelector(".btn-delete").addEventListener("click", () => {
            if (confirm(`Delete "${todo.title}"?`)) {
                getActiveProject().removeTodo(todo.id);
                Storage.saveProjects(projects);
                renderProjects();
                renderTodos();
            }
        });

        todoList.appendChild(card);
    });
};

let editingTodoId = null;

const openAddTodoDialog = () => {
    editingTodoId = null;
    document.getElementById("dialog-title").textContent = "Add New Todo";
    document.getElementById("btn-submit").textContent = "Add Todo";
    document.getElementById("todo-form").reset();
    document.getElementById("todo-date").value = new Date().toISOString().split("T")[0];
    document.getElementById("todo-dialog").showModal();
};

const openEditTodoDialog = (todo) => {
    editingTodoId = todo.id;
    document.getElementById("dialog-title").textContent = "Edit Todo!";
    document.getElementById("btn-submit").textContent = "Save Changes";
    document.getElementById("todo-title").value = todo.title;
    document.getElementById("todo-desc").value = todo.description;
    document.getElementById("todo-date").value = todo.dueDate;
    document.getElementById("todo-priority").value = todo.priority;
    document.getElementById("todo-notes").value = todo.notes;
    document.getElementById("todo-dialog").showModal();
};

const initEvents = () => {
    const todoDialog = document.getElementById("todo-dialog");
    const projectDialog = document.getElementById("project-dialog");
    const todoForm = document.getElementById("todo-form");
    const projectForm =document.getElementById("project-form");

    document.getElementById("btn-add-todo").addEventListener("click", () => {
        if (!getActiveProject()) {
            alert("Please create a project first!");
            return;
        }
        openAddTodoDialog();
    });

    document.getElementById("btn-cancel").addEventListener("click", () => {
        todoDialog.close();
    });

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("todo-title").value.trim();
        const desc = document.getElementById("todo-desc").value.trim();
        const date = document.getElementById("todo-date").value;
        const priority = document.getElementById("todo-priority").value;
        const notes = document.getElementById("todo-notes").value.trim();

        const activeProject = getActiveProject();

        if (editingTodoId) {
            const todo = activeProject.getTodo(editingTodoId);
            if (todo) {
                todo.title = title;
                todo.description = desc;
                todo.dueDate = date;
                todo.priority = priority;
                todo.notes = notes;
            }
        } else {
            activeProject.addTodo(title, desc, date, priority, notes);
        }

        Storage.saveProjects(projects);
        todoDialog.close();
        todoForm.reset();
        renderprojects();
        renderTodos();
    });

    document.getElementById("btn-add-project").addEventListener("click", () => {
        document.getElementById("project-form").reset();
        projectDialog.showModal();
    });

    document.getElementById("btn-cancel-project").addEventListener("click", () => {
        projectDialog.close();
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("project-name").value.trim();
        if (!name) return;

        const { default: Project } = require("./Project.js");
        import("./Project.js").then( ({ default: Project }) => {
            const newProject = new Project(name);
            projects.push(newProject);
            activeProjectId = newProject.id;
            Storage.saveProjects(projects);
            projectDialog.close();
            projectForm.reset();
            renderprojects();
            renderTodos();
        });
    });
};

const initUI = () => {
    initEvents();
    renderProjects();
    renderTodos();
};

export default initUI;