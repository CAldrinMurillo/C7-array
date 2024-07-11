function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  console.log(array);
  if(array.length === 0) return 0
  let indexResult = array.indexOf(Math.max(...array))
  console.log(indexResult);
  return indexResult;
}

encontrarIndiceMayor([2,8,11,3,21,13])

module.exports = encontrarIndiceMayor;
