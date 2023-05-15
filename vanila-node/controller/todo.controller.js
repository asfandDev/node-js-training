import * as Todo from '../model/todo.model.js'
import { getPostData } from '../util/todo.js';

/**
 * @returns [] array of todo lists
 * @description get all todo list items
 */
export const getTodos = async (request, response) => {
  try {
      const todos = await Todo.findAll();

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(todos))
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'There is something bad happend!'}));
  }
}

/**
 * @returns return a todo
 * @description get todo by id
 */
export const getTodo = async (request, response, id) => {
  try {
      const todo = await Todo.findById(id);

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(todo))
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: error.message}));
  }
}

/**
 * @returns return a new todo
 * @description create todo
 */
export const createTodo = async (request, response) => {
  try {
      const body = await getPostData(request);
      const {text} =  body;

      const todo = {
        id: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        text
      };

      const newTodo = await Todo.create(todo);

      response.writeHead(201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(newTodo));
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: error.message}));
  }
}
