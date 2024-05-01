
const cardNumberLength = 16

// Valida se todos os elementos do array são iguais
const allEqual = (arr: String[]) => arr.every(val => val === arr[0]);

// Valida se todos os elementos do array são iguais a 1234
const allEqualTo1234 = (arr: String[]) => arr.every(val => val === '1234');

export const validateCardNumber = (cardNumber: String) => {

  const cardNumberFormatted = cardNumber.replace(/\s/g, '')
  
  // Verifica se todos os caracteres são números
  const onlyDigits = /^\d+$/.test(cardNumberFormatted)
  if(!onlyDigits) {
    return false
  }

  // valida a quantidade de caracteres do cartão
  if(cardNumberFormatted.length !== cardNumberLength) {
    return false
  }

  // Expressão regular para encontrar grupos de 4 caracteres
  const regex = /(.{4})/g

  const cardNumberGroupArray = cardNumberFormatted.match(regex)

  if(cardNumberGroupArray === null) {
    return false
  }

  return !allEqual(cardNumberGroupArray) && !allEqualTo1234(cardNumberGroupArray)
}