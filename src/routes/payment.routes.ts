import { Router } from 'express'

import { PaymentController } from '../controller/PaymentController'

const paymentController = new PaymentController()

const paymentRoutes = Router()

paymentRoutes.post(
  "/payment",
  paymentController.makePayment
);