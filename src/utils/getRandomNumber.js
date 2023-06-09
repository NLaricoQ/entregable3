export const getRandomNumber = (min, max) => {
  // Distancia entre 2 numeros
  const amplitud = Math.abs(max - min);
  // numero aleatorio entre 0 y la distancia
  const randomAmplitud = Math.round(Math.random() * amplitud);
  // La distancia aleatoria se suma al minimo
  // En caso da 0, nos quedamos con el minimo
  // En caso da la distancia completa, nos quedamos con el maximo
  return min + randomAmplitud;
};
