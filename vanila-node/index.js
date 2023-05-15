import { createServer } from 'node:http';
import { createTodo, getTodo, getTodos } from './controller/todo.controller.js';

const PORT = 4000;

const app = createServer((request, response) => {
  if (request.url === '/api/todos' && request.method === 'GET')
    getTodos(request, response);

    else if (
    request.url.match(/\/api\/todo\/([0-9]+)/) &&
    request.method === 'GET'
  ) {
    const id = request.url.split('/')[3];
    getTodo(request, response, id);
  }

  else if (request.url === '/api/todo' && request.method === 'POST')
    createTodo(request, response);

    else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Route not found!' }));
  }
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
