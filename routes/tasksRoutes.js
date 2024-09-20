const express = require('express');
const tasksController = require('../controlers/tasksController');

// Crear una instancia del enrutador de Express
const router = express.Router();

// Método GET all (obtener todas las tareas)
// Ruta: GET /tasks
// Obtiene todas las tareas desde el controlador y las devuelve en formato JSON
router.get('/', function(req, res){
    // Obtener todas las tareas llamando a la función getAllTasks del controlador
    const tasks = tasksController.getAllTasks();
    // Responder con el código de estado 200 y las tareas en formato JSON
    if(tasks.length > 0){
        res.status(200).json(tasks);
    }else{
        res.status(404).json({code: '404', message: 'Tasks not found'});
    }
});

// Método GET id (obtener una tarea por ID)
// Ruta: GET /tasks/:id
// Obtiene una tarea específica por su ID desde el controlador
router.get('/:id', function(req, res){
    // Obtener el ID de la tarea desde el parámetro de la URL
    const id = req.params.id;

    // Llamar a la función getTask del controlador con el ID obtenido
    const task = tasksController.getTask(id);

    // Verificar si la tarea fue encontrada
    if(task){
        // Responder con el código de estado 200 y la tarea en formato JSON
        res.status(200).json(task);
    }else{
        // Responder con el código de estado 404 y un mensaje de "Tarea no encontrada"
        res.status(404).json({code: 404, message: 'Task not found'});
    }
});

// Método POST (crear una nueva tarea)
// Ruta: POST /tasks
// Crea una nueva tarea con los datos proporcionados en el cuerpo de la solicitud
router.post('/', function(req, res){
    // Obtener los datos de la nueva tarea del cuerpo de la solicitud
    const { title, description } = req.body;

    // Llamar a la función createTask del controlador para crear la nueva tarea
    const task = tasksController.createTask(title, description);
    // Responder con el código de estado 200 y la nueva tarea en formato JSON
    if( !title || !description ){
        res.status(400).json({code: 400, message: 'Bad request'});
    }else {
        res.status(201).json(task);
    }
});

// Método DELETE (eliminar una tarea)
// Ruta: DELETE /tasks/:id
// Elimina una tarea específica por su ID desde el controlador
router.delete('/:id', function(req, res){
    // Obtener el ID de la tarea desde el parámetro de la URL
    const id = req.params.id;

    // Llamar a la función deleteTask del controlador con el ID obtenido
    const task = tasksController.deleteTask(id);

    // Verificar si la tarea fue encontrada y eliminada
    if(task){
        // Responder con el código de estado 200 y la tarea eliminada en formato JSON
        res.status(200).json(task);
    }else{
        // Responder con el código de estado 404 y un mensaje de "Tarea no encontrada"
        res.status(404).json({code: 404, message: 'Task not found' });
    }
});

// Método PUT (actualizar una tarea)
// Ruta: PUT /tasks/:id
// Actualiza una tarea específica con los datos proporcionados en el cuerpo de la solicitud
router.put('/:id', function(req, res){
    // Obtener el ID de la tarea desde el parámetro de la URL
    const id = req.params.id;
    // Obtener los datos de la tarea a actualizar del cuerpo de la solicitud
    const { title, description, completed } = req.body;

    // Llamar a la función updateTask del controlador para actualizar la tarea
    const task = tasksController.updateTask(id, title, description, completed);

    // Verificar si la tarea fue encontrada y actualizada
    if(task){
        // Responder con el código de estado 200 y la tarea actualizada en formato JSON
        res.status(200).json(task);
    }else{
        // Responder con el código de estado 404 y un mensaje de "Tarea no encontrada"
        res.status(404).json({code: 404, message: 'Task not found' });
    }
});

// Método PATCH (actualizar parcialmente una tarea)
// Ruta: PATCH /tasks/:id
// Actualiza parcialmente una tarea específica (solo el estado completado)
router.patch('/:id', function(req, res){
    // Obtener el ID de la tarea desde el parámetro de la URL
    const id = req.params.id;

    // Llamar a la función toggleCompletedTask del controlador para actualizar parcialmente la tarea
    const task = tasksController.toggleCompletedTask(id);

    // Verificar si la tarea fue encontrada y actualizada
    if(task){
        // Responder con el código de estado 200 y la tarea actualizada en formato JSON
        res.status(200).json(task);
    }else{
        // Responder con el código de estado 404 y un mensaje de "Tarea no encontrada"
        res.status(404).json({code: 404, message: 'Task not found' });
    }
});

// Exportar el enrutador para su uso en la aplicación principal
module.exports = router;
