function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var numToString = num.toString()
  for (let i = 0; i < numToString.length; i++) {
    
    if (numToString.length === 3) {
      return true;
      
    

    } else {

      return false
    }
  }
 
}

module.exports = tieneTresDigitos;
