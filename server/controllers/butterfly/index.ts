import express, { Request, Response } from 'express';
import { body, CustomValidator, validationResult } from 'express-validator';
import knex from '../../db';
import { Butterfly } from './types';
import isURL from '../../../utils/utils';

const router: express.Router = new (express.Router as any)();

async function getAll(req: Request, res: Response) {
  const butterflies = await knex('butterfly')
    .select<Butterfly[]>('*')
    .where(req.query);
  return res.json(butterflies);
}

async function deleteButterfly(req: Request, res: Response) {
  if (req.params.id) {
    try {
      const found = await knex('butterfly')
        .where({ id: req.params.id })
        .del();
      res.status(200)
        .send();
    } catch (error) {
      res.status(404)
        .json(error);
    }
  } else {
    res.status(400)
      .send('Please specify an ID');
  }
}

async function findById(id: number) {
  try {
    const found = await knex('butterfly')
      .select<Butterfly>('id')
      .where({ id });
    return found;
  } catch (err) {
    return null;
  }
}

async function findByName(name: string): Promise<Butterfly | null> {
  try {
    const found = await knex('butterfly')
      .select<Butterfly>('*')
      .where({ name });
    return found;
  } catch (err) {
    return null;
  }
}

async function postOne(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400)
      .json({ errors: errors.array() });
  }

  try {
    const [returned] = await knex('butterfly')
      .insert(req.body)
      .returning('id');
    const newlyCreatedButterfly = await findById(returned.id);
    res.status(201)
      .json(newlyCreatedButterfly);
  } catch (error) {
    res.status(500)
      .json(error);
  }
}

async function toggleWishlistStar(req: Request, res: Response) {
  if (req.params.id) {
    try {
      const found: Butterfly = await knex('butterfly')
        .where({ id: req.params.id })
        .first();

      if (found) {
        await knex('butterfly')
          .where({ id: found.id })
          .update({ on_the_wishlist: !found.on_the_wishlist });

        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(404)
        .json(error);
    }
  } else {
    res.status(400)
      .send('Please specify an ID');
  }
}

export const urlValidator: CustomValidator = (value) => {
  if (isURL(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Field value has to be a valid url'));
};
export const nameAlreadyTakenValidator: CustomValidator = (value) => {
  console.log('value', value);

  return findByName(value)
    .then((butterfly) => {
      console.log('butterfly isss', butterfly);
      if (butterfly) {
        return Promise.reject(new Error('Name has already been used. Please enter a different value'));
      }
      return Promise.resolve();
    });
};

const postOneValidators = [
  body('name')
    .notEmpty()
    .isLength({ max: 200 })
    .custom(nameAlreadyTakenValidator),
  body('species')
    .notEmpty()
    .isLength({ max: 200 }),
  body('image_url')
    .notEmpty()
    .isLength({ max: 200 })
    .custom(urlValidator),
  body('link')
    .notEmpty()
    .isLength({ max: 200 })
    .custom(urlValidator),
];

router.get('/', (req, res) => getAll(req, res));
router.post('/', ...postOneValidators, (req, res) => postOne(req, res));
router.delete('/:id', async (req, res) => deleteButterfly(req, res));
router.post('/:id/toggle-wishlist-star', async (req, res) => toggleWishlistStar(req, res));

export { router };
