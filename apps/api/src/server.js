import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/hello', (_req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
