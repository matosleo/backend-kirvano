export const checkCardExpirationDate = (cardExpirationDate: String): Boolean => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  const cardYearExpiration = Number(cardExpirationDate.split('/')[1])
  const cardMonthExpiration = Number(cardExpirationDate.split('/')[0])

  if(cardYearExpiration > currentYear) {
    return true
  } else if (cardYearExpiration === currentYear) {
    if(cardMonthExpiration >= currentMonth ) {
      return true
    }
  }

  return false
}