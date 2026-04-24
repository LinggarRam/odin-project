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
            } else if (isPact(date) && !todo.completed) {
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