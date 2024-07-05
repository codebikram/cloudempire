import express from 'express';
import { createConnection } from 'mysql';

const app = express();
const PORT = 5000;

const db = createConnection({
  host: '89.117.157.204',
  user: 'u769677815_user',
  password: 'Bikram@86',
  database: 'u769677815_test',
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
});
db.query('SELECT * FROM test', function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
