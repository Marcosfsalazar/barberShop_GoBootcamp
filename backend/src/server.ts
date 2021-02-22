import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(4200, () => {
  console.log('🤝️ server started on port 4200!');
});
