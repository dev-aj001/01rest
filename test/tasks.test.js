const request = require('supertest');
const chai = require('chai');
const sinon = require('sinon');

const app = require('../index');
const tasksController = require('../controlers/tasksController')
const Task = require('../models/tasks');

const expect = chai.expect;

describe('GET /tasks', () => {
    it('1. Debería devolver todas las tareas con estatus 200 cuando hay tareas', async() => {
        const tasks = [
            new Task(1, 'Tarea 1', 'Description Tarea 1'),
            new Task(2, 'Tarea 2', 'Description Tarea 2'),
            new Task(3, 'Tarea 3', 'Description Tarea 3'),
            new Task(4, 'Tarea 4', 'Description Tarea 4'),
         ];

         const res = await request(app).get('/tasks');

         expect(res.statusCode).to.equal(200);
         expect(res.body).to.be.an('array');
         expect(res.body.length).to.equal(3);
         expect(res.body).to.deep.equal(tasks);

    });
});


// npm i --save-dev chai@4.2.0