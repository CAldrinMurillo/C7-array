function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let stringArray =string.split('')
  let wordRev = stringArray.reverse()
  let palabraPali = wordRev.join('')
  if (palabraPali === string) return true
  else { 
    return false
  }

}
esPalindromo("neuquen")

module.exports = esPalindromo;