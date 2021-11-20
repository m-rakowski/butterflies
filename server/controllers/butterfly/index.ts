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

export { router };