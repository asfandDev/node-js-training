import express from 'express';

const app = express();
const PORT = 5000;

const data = [
  {
    name: 'John doe',
    email: 'john.doe@test.com',
    hobbies: ['Cricket', 'Football', 'Swimming']
  },
  {
    name: 'Adam doe',
    email: 'adam.joe@test.com',
    hobbies: ['Football', 'Table Tennis', 'Tennis', 'Badminton']
  },
  {
    name: 'Oliver james',
    email: 'oliver.james@test.com',
    hobbies: []
  },
  {
    name: 'Michael jacob',
    email: 'michael.jacob@test.com',
    hobbies: ['Tennis']
  }
];

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
res.render('index', { title: 'students',  students: data });
})

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
