import { Request, Response } from 'express'
import { checkCardExpirationDate } from '../utils/checkCardExpirationDate'
import { validateCardNumber } from '../utils/validateCardNumber'

export class PaymentController {
 
  async makePayment(req: Request, res: Response): Promise<Response | void>{
    const {paymentInfo, shippingInfo, orderSummary} = req.body
    
    if(!checkCardExpirationDate(paymentInfo.expirationDate)) {
      return res.json({message: "A data de validade do cartão está expirada"})
    }

    if(!validateCardNumber(paymentInfo.cardNumber)) {
      return res.json({message: "Número do cartão inválido"})
    }

    return res.json({message: "Pagamento Aceito"})
  }

}