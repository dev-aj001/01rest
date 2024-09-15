class Task {
    constructor(id, tittle, description, completed=false, createdAt = new Date()) {
        this.id = id;
        this.title = tittle;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }
}

module.exports = Task;