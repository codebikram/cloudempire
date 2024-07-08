import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './db.js';
import postRoute from './routes/posts.route.js';
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ message });
});
db.query('SELECT 1')
  .then((data) => {
    console.log('connected to database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('connection failed\n' + err);
  });
