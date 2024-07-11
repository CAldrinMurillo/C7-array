const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let arrPr = []
  let cont = 0
  for (let prop in objeto){
    arrPr.push(prop)
  }
  for (let i = 0; i < arrPr.length; i++) {
    cont ++
    
  } 
  return cont

};

module.exports = contarPropiedades;
