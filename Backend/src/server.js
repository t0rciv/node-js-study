import express from 'express';

const app = express();
const port = 3000;

const users = [
  {name: "Fulano", age: 30},
  {name: "Siclano", age: 25},
]

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World˜');
});

app.get('/test', (req, res) => {
  res.send(`<h1>Página de Teste</h1>`);
})

app.get('/users', (req, res) => {
  res.send(JSON.stringify(users));
})

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const user = { name, age };
  users.push(user);

  res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})