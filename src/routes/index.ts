import { Router } from 'express'

const router = Router()

// This middleware is executed for every request to the router
router.use((req, res, next) => {
  const {access_token} = req.query

  if(req.url == '/') {
    return next()
  }

  if(!access_token || access_token != process.env.PASS_TOKEN) {
    return res.status(401).send("Access unauthorized. Verify if your access token is correct.")
  }
  next()
})

router.post("/teste1", (request, response) => {
  response.send('teste rota 1');
})

router.get("/teste2", (request, response) => {
  response.send('teste rota 2');
})

// Main Route
router.get("/", (request, response, next) => {
  const fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
  response.send(`This is a main route ${fullUrl}`);
})

export { router }

