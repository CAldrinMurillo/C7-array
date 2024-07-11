function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  console.log(array);

  let countQuant = array.filter(x => x >10)
  return countQuant.length
}
contarElementosMayoresA10([2,8,11,3,21,13])

module.exports = contarElementosMayoresA10;
