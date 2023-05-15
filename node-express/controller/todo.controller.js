import * as Todo from '../model/todo.model.js';
import { sendEmail } from '../util/email.js';

/**
 * @returns [] array of todo lists
 * @description get all todo list items
 */
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @returns return a todo
 * @description get todo by id
 */
export const getTodo = async (req, res, id) => {
  try {
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @returns return a todo
 * @description get todo by id
 */
export const createTodo = async (req, res) => {
  try {
    const {text} = req.body
    const todo = {
      id: 41,
      text
    }
    const newTodo = await Todo.create(todo);
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
