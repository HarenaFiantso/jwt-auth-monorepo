import express from 'express';
import cors from 'cors';
import todoRoute from './routes/todo.route.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/todo', todoRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
