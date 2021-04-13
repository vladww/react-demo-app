export const required = value => {
  if(value) return undefined
  
  return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
  // if(value && value.lenght > 30) return 'Max length is 30 symbols' //а здесь ещё проверяет, что value вообще есть
  if(value.length > maxLength) return `Max length is ${maxLength} symbols`
  return undefined
}

// export const maxLength30 = value => {
//   // if(value && value.lenght > 30) return 'Max length is 30 symbols' //а здесь ещё проверяет, что value вообще есть
//   if(value.length > 30) return 'Max length is 30 symbols'
//   return undefined
// }