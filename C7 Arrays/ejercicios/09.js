function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
let result = Math.floor(Math.random()*array.length)
return array[result]
    
 
}

module.exports = obtenerElementoAleatorio;
