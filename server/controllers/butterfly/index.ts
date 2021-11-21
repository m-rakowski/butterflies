import express from 'express'
import knex from '../../db'
import { Butterfly } from './types'

const router: express.Router = new (express.Router as any)()

router.get('/', async (req, res) => {
  const butterflies = await knex('butterfly')
    .select<Butterfly[]>('*')

  res
    .status(200)
    .json(butterflies)
})

router.post('/', async (req, res) => {
  try {
    const [returned] = await knex('butterfly').insert(req.body).returning('id');
    const newlyCreatedButterfly = await knex('butterfly').where({
      id: returned,
    });
    res.status(201).json(newlyCreatedButterfly);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.delete('/:id', async (req, res) => {
  if (req.params.id) {
    try {
      const found = await knex('butterfly').where({ id: req.params.id }).del();
      res.status(200).send();
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(400).send('Please specify an ID');
  }
});

export { router };
