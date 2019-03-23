import { Router } from 'express';
import Example from './model';

const exampleRouter = new Router();

exampleRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const docs = await Example.find();
      res.status(200).send({ message: 'found all', data: docs });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  })
  .post(async (req, res) => {
    try {
      const doc = await Example.create({ username: req.body.username });
      res.status(201).send({ message: 'created', data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  });

exampleRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const doc = await Example.findById(req.params.id);
      res.status(200).send({ message: 'found', data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  })
  .put(async (req, res) => {
    try {
      const doc = await Example.findByIdAndUpdate(
        req.params.id,
        { username: req.body.username },
        { new: true }
      );
      res.status(200).send({ message: 'updated', data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  })
  .delete(async (req, res) => {
    try {
      const doc = await Example.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: 'deleted', data: doc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  });

export default exampleRouter;
