function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var acc = 0;
   for (let i = 1; i <= n; i++) {
     acc += i;  
     if (acc > 100) {
       break;
       
      }  
    } 
   return acc;
}

module.exports = sumarHastaNConBreak;
