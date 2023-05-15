import express from 'express';
import { createTodo, getAllTodos, getTodo } from '../controller/todo.controller.js';

const router = express.Router();


router.get('/', async (req, res) => {
  getAllTodos(req,res)
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
  getTodo(req, res, id);
});

router.post('/', async (req, res) => {
  createTodo(req, res);
});

router.delete('/', async (req, res) => {
  createTodo(req, res);
});

export default router;
