function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  console.log(arrayOfNums);

  let resultado = arrayOfNums.reduce((acc, valorAc)=>{
   return  acc+valorAc
  }, 0)
  console.log(resultado);
  return resultado;
}
agregarNumeros([1,3,5])

module.exports = agregarNumeros;
