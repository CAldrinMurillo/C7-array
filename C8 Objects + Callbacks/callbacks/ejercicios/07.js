function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let nuevoArr = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i][0] === "a") {
      nuevoArr.push(arrayOfStrings[i]);
    } 
    
  }
  return nuevoArr;
}

module.exports = filter;
