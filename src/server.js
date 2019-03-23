import express from 'express';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import exampleRouter from './resources/example/router';

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/example', exampleRouter);

mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
