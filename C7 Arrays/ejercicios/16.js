function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    
    newArr.push(array[i]*i)
  } 
  return newArr;
} 
 multiplicarElementosPorIndice([2,8,11,3,21,13])
module.exports = multiplicarElementosPorIndice;
