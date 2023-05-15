const todos = [
  { id: 1, text: 'working' },
  { id: 2, text: 'enjoy' },
  { id: 3, text: 'stack' }
];

export const findAll = () => {
 return new Promise((resolve, reject) => {
    resolve(todos);
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    const todo =  todos.find(todo => todo.id == id)
    resolve(todo);
  });
};


export const create = (todo) => {
  return new Promise((resolve, reject) => {
    todos.push(todo);
    resolve(todo);
  });
};
