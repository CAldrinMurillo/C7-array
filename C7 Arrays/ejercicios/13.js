function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numPar = array.filter(x => x%2 ===0)
  return numPar;
}

module.exports = filtrarNumerosPares;
