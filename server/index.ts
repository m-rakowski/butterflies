import express, { ErrorRequestHandler } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import * as ButterflyController from './controllers/butterfly'

const app = express()

app.use(bodyParser.json({ limit: '10mb' }) as any)
app.use(bodyParser.text({ type: 'application/x-www-form-urlencoded' }) as any)

app.use(cookieParser())

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', `Content-type,Accept,x-token,Cookie,timestamp`);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return next();
})

app.get('/', (req, res) => {
  res
    .status(200)
    .json({
      message: 'kkk'
    })
})

app.use('/butterflies', ButterflyController.router)

app.use((req, res) => {
  res
    .status(404)
    .json({
      message: `There is no method ${req.method} for endpoint: ${req.path}`
    })
})


const genericErrorHandler: ErrorRequestHandler = (err, req, res) => {
  console.error(err)
  res
    .status(500)
    .json({
      message: 'unexpected error'
    })
}

app.use(genericErrorHandler)

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
});