import express, { Request, Response } from 'express';

const app = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`server is running on port# : ${port}`);
});
