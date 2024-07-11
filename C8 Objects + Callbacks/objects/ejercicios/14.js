function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  let tieneLaProp = objetoUsuario.hasOwnProperty('email') && objetoUsuario.email !== null;

  return tieneLaProp;
}

module.exports = tieneEmail;
