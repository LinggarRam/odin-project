import Todo from "./Todo.js"

class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority, notes) {
        const todo = new Todo(title, description, dueDate, priority, notes);
        this.todos.push(todo);
        return todo;
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }

    getTodo(todoId) {
        return this.todos.find((todo) => todo.id === todoId);
    }

    getPendingCount() {
        return this.todos.filter((todo) => !todo.completed).length;
    }
}

export default Project;