# 🦋 Butterfly app

The Butterly app is an app that allows you to view butterflies!

It consists of 2 parts:
- **backend** *(REST API built via express)*
- **frontend** *(SPA built via React)*

The project is written in **Typescript**

## Backend

The backend is an ExpressJS REST API server. 
For the database we use Postgres. To talk to the database, we use [Knex](https://knexjs.org/) query builder. All code related to the backend is located in the `server` folder.<br/>

The REST API provides a single endpoint:
```
GET /butterfiles
```
It returns a list of butterfiles (check the butterfly schema in `server/controllers/butterfly/types.ts`)

## Frontend

Frontend is an SPA built on top of React. For routing we use `react-router-dom` lib. All code related to the frontend is located in the `fe` folder.

## Task

The Butterfly app is already a pretty great app, but we think it would be even better if it let users create and delete butterflies. 

Your task is to implement:
1. An endpoint which receives a new butterfly and stores it in the database.
2. a form on the frontend for adding a new butterfly to the collection, available somewhere in the UI
3. An endpoint which deletes the specified Butterfly
4. A **delete** button on the butterfly card

### Bonus task
Implement **wishlist** functionality. Add ability to add butterfiles to the wishlist and then view wishlist on a sepparate page.

### What we're looking for
* Your code should be extensible and reusable
* Your code should be tidy and adhere to conventions
* Your changes should be well-scoped and explained in the write-up
* Your write-up should be thoughtful and coherent

You should also provide a small **write-up** that explains the decisions (for instance, the HTTP verbs for new endpoints) and trade-offs you made. If you add any new dependencies, spend some time talking about why you chose them.

You are free to refactor or improve any code you think should be refactored, but please include a note about such changes in your write-up. Any changes you make should be scoped and explained as though you are opening a pull request against an existing codebase used in a production API service.

❗️ If you have any questions or concerns, please do not hesitate to contact us!

### Scoring rubric

You will be scored on the following aspects of your work:

* Endpoint implementation
* Endpoint design
* Appropriate testing of new code
* Tidiness and adherence to conventions
* Appropriate refactoring
* Communication in the write-up

0 = poor 1 = adequate 2 = exceptional

The maximum possible score is 12.

## Setup

**1. Install dependencies**
```sh
npm install
```

**2. Create database** (for that you need `docker` and `docker-compose` to be installed on your machine)
```sh
npm run db:init
```
Command above will spin up postgres docker image on your machine (for more details check `server/docker-compose.yaml`), apply migrations from `migrations` folder and apply seeds from `seeds` folder

**3. Run server**
```sh
npm run server:dev
```
Command above will build server source code and run it via nodemon. Nodemon listen for changes in `server` folder (for mre details check `nodemon.json`)

**4. Run frontend**
```sh
npm run fe:dev
```
Command above will run frontend app via `webpack-dev-server` and it will be available on `http://localhost:3000`

## Development
Both backend and frontend are built and running in development mode. To run them both you can launch backend/frontend servers on the separate terminals. In the first terminal run server `npm run server:dev`. In the second terminal run frontend `nnpm run fe:dev`

If you want add new DB migration run next command:
```sh
npm run db:migrate:create [migration_name]
```
It will generate new migration template in `migrations` folder. To apply migrations run:
```sh
npm run db:migrate:up
```

To add new seeds file run next command:
```sh
npm run db:seed:create [seed_name]
```
It will generate new seeds template in `seeds` folder. To apply seeds run:
```sh
npm run db:seed:run
```

## Notes
In general you can use any technology/tool that you want. E.g CSS pre/post processors, state managers, query-builders/ORM ...etc. If you want to change existing code - please do :) 