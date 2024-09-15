const Task = require('../models/tasks');

// Lista inicial de tareas (simulando una base de datos en memoria)
let tasks = [
   new Task(1, 'Tarea 1', 'Description Tarea 1'),
   new Task(2, 'Tarea 2', 'Description Tarea 2'),
   new Task(3, 'Tarea 3', 'Description Tarea 3'),
   new Task(4, 'Tarea 4', 'Description Tarea 4'),
];

// Función para obtener todas las tareas
// Retorna la lista completa de tareas
function getAllTasks() {
    return tasks;
}

// Función para obtener una tarea específica por ID
// Parámetros:
//   id (Number): ID de la tarea a buscar
// Retorna la tarea correspondiente o null si no se encuentra
function getTask(id) {
    return tasks.find(t => t.id == id) || null;
}

// Función para crear una nueva tarea
// Parámetros:
//   title (String): Título de la tarea
//   description (String): Descripción de la tarea
// Retorna la tarea recién creada
function createTask(title, description){
    // Crear una nueva instancia de Task con un ID único
    const newTask = new Task(tasks.length + 1, title, description);

    // Añadir la nueva tarea a la lista de tareas
    tasks.push(newTask);
    // Retornar la tarea creada
    return newTask;
}

// Función para eliminar una tarea por ID
// Parámetros:
//   id (Number): ID de la tarea a eliminar
// Retorna la tarea eliminada o null si no se encuentra
function deleteTask(id){
    // Encontrar el índice de la tarea a eliminar
    const index = tasks.findIndex(t => t.id == id);

    // Si la tarea se encuentra, eliminarla
    if(index !== -1){
        // Eliminar la tarea del array y retornar la tarea eliminada
        const [deletedTask] = tasks.splice(index, 1);
        return deletedTask;
    }
    // Retornar null si la tarea no se encuentra
    return null;
}

// Función para actualizar una tarea existente
// Parámetros:
//   id (Number): ID de la tarea a actualizar
//   title (String): Nuevo título de la tarea
//   description (String): Nueva descripción de la tarea
//   completed (Boolean): Nuevo estado de completado de la tarea
// Retorna la tarea actualizada o null si no se encuentra
function updateTask(id, title, description, completed){
    // Encontrar la tarea por ID
    const task = tasks.find(t => t.id == id);
    if(task){
        // Actualizar los campos de la tarea
        task.title = title;
        task.description = description;
        task.completed = completed;
        // Retornar la tarea actualizada
        return task;
    }
    // Retornar null si la tarea no se encuentra
    return null;
}

// Función para alternar el estado de completado de una tarea
// Parámetros:
//   id (Number): ID de la tarea a actualizar
// Retorna la tarea con el estado de completado alternado o null si no se encuentra
function toggleCompletedTask(id){
    // Encontrar la tarea por ID
    const task = tasks.find(t => t.id == id);
    if(task){
        // Alternar el estado de completado
        task.completed = !task.completed;
        // Retornar la tarea actualizada
        return task;
    }
    // Retornar null si la tarea no se encuentra
    return null;
}

// Exportar las funciones del controlador para su uso en otras partes de la aplicación
module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    getTask,
    updateTask,
    toggleCompletedTask,
};
