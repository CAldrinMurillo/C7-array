function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var verString = true;
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] !== 'string') verString = false;
    
  } if(verString) array.sort()
    else {
      array.sort((a,b)=>a-b)

    } return array;
}
module.exports = ordenarArray;
