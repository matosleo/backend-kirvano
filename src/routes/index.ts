import { Router } from 'express'

const router = Router()

// Main Route
router.use("/", (request, response) => {
  const fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
  response.send(`This is a main route ${fullUrl}`);
})

export { router }

