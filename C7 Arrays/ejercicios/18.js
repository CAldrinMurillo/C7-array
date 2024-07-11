function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let acc = 0

  if (resultadosTest.length === 0) {
    return 0;
  }
  for (let i = 0; i < resultadosTest.length; i++) {
    acc = acc + resultadosTest[i]
    
  }
  let promedio = acc/ resultadosTest.length;
  return promedio;
  
}
promedioResultadosTest([1, 4, 4]);


// ERROR CORREGIR