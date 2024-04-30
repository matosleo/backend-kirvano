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

// Main Route
router.get("/", (req, res, next) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`This is a main route ${fullUrl}`);
})

export { router }

