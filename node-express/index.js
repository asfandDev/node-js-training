import express from 'express'
import todo from './routes/todo.js'

const app  = express();
const PORT = 4000

const data = []

app.use(express.json());

//logging time
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/api/v1/todo', todo)


//The 404 Route (ALWAYS Keep this as the last route)
app.all('*', function(req, res){
  res.send('route not exist', 404);
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
 console.log(`server is listening at ${PORT}`)
})
