/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let newAr = [];

  for (let prop in objeto) {
    newAr.push([prop, objeto[prop]]);
  }
  return newAr;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let strOrd = string.split("").sort().join("");
  let contador = 1;
  let newObj = {};

  for (let i = 0; i < strOrd.length; i++) {
    const element = strOrd[i];
    if (element === strOrd[i + 1]) {
      contador++;
      newObj[element] = contador;
    } else {
      newObj[element] = contador;
      contador = 1;
    }
  }
  return newObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let strMayus = "";
  let strMinus = "";
  for (let i = 0; i < string.length; i++) {
    const element = string[i];

    if (element === string[i].toUpperCase()) {
      strMayus = strMayus + string[i];
    } else {
      strMinus += string[i];
    }
  }
  let respuesta = strMayus + strMinus;
  return respuesta;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let strToArr = frase.split(" ");
  let strResp = "";

  for (let i = 0; i < strToArr.length; i++) {
    let resArrInv = strToArr[i].split("").reverse().join("");
    if (i === 0) {
      strResp = resArrInv;
    } else {
      strResp = strResp + " " + resArrInv;
    }
  }
  return strResp;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  let numInv = numero.toString().split("").reverse().join("");
  if (numero.toString() === numInv) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let strAar = string.split("");
  let resultado = []
  for (let i = 0; i < strAar.length; i++) {
    const element = strAar[i];
    if(element !=='a' && element !== 'b' && element !='c'){
      resultado.push(element)
    }
  }
  return resultado.join('')
}
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let arrOrd = arrayOfStrings.sort((a,b)=>{
    return a.length - b.length
  })
  return arrOrd;

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let arrResult = []
  for (let i = 0; i < array1.length; i++) {
    
    for (let j = 0; j < array2.length; j++) {

      if(array1[i] === array2[j]){
        arrResult.push(array1[i])
      }
    } 
  }
  return arrResult;
}
buscoInterseccion([4,2,3], [1,3,4])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
