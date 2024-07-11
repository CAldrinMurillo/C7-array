function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var mult = 1;
  for (let i = a; i <= b; i++) {
    mult *= i;
  }
  return Math.abs(mult);
}

module.exports = productoEntreNúmeros;
