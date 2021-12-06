# 🦋 Butterfly app

The Butterly app is an app that allows you to view butterflies!

It consists of 2 parts:
- **backend** *(REST API built via express)*
- **frontend** *(SPA built via React)*

The project is written in **Typescript**
 
## Screenshots
<p style="float: left">
<img src="https://user-images.githubusercontent.com/15091521/143333281-3ae137c8-5c4c-449a-8d4e-65fafe971f7d.png" width="500"/>
<img src="https://user-images.githubusercontent.com/15091521/143333293-b924225c-7b80-4981-99b7-e8d0cd7c9844.png" height="300"/>
<img src="https://user-images.githubusercontent.com/15091521/143333296-10f5d04f-c4c7-4cc2-9cda-705005892487.png" height="300"/>
</p>


## User story #1 - Create

_As a user, I should be able to create a new butterfly_

__Acceptance criteria:__

1. There is separate tab for creating butterflies
2. The form should be validated. An error message appears next to each incorrectly filled out field
3. Backend endpoints should also be validated


## User story #2 - Delete

_As a user, I should be able to remove butterflies from the list_

__Acceptance criteria:__

1. There is a delete button next to each of the butterflies
2. Upon clicking, the butterfly disappears from the list


## User story #3 - Wishlist

_As a user, I should be able to save butterflies I like into a separate wishlist_

__Acceptance criteria:__

1. A star next to a butterfly indicates it is on the wishlist
2. The star can be toggled on and off
3. There is a separate tab listing butterflies picked on the primary list


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
