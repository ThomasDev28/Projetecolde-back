import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import wilderController from './controllers/Wilder';

const app = express();
const url =
  'mongodb+srv://db_express28:db_express28@cluster0.ilqxz.mongodb.net/wilders?retryWrites=true&w=majority';

// Database
mongoose
  .connect(url, {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database')) // eslint-disable-line no-console
  .catch((err) => console.log(err)); // eslint-disable-line no-console

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/wilders', wilderController.create);
app.get('/api/wilders', wilderController.read);
app.put('/api/wilders', wilderController.update);
app.delete('/api/wilders', wilderController.delete);

// Start Server
app.listen(5000, () => console.log('Server started on 5000')); // eslint-disable-line no-console
