function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let stringMay = array.map(x => x.toUpperCase())
  return stringMay;
  
}

module.exports = convertirStringAMayusculas;
