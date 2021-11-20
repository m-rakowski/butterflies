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

export { router };