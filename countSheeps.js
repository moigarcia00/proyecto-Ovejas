/**
 * Cuenta la cantidad de ovejas (true) en un rebaño representado como lista de booleanos.
 * Recorre la lista uno por uno, mostrando el proceso en consola.
 * Los "false" representan lobos.
 *
 * @param {boolean[]} list - Lista de valores booleanos (true = oveja, false = lobo)
 * @returns {string} Mensaje con el conteo de ovejas, o alerta si no quedan ovejas
 */
function countSheeps(list) {
  let sheepCount = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === true) {
      sheepCount++;
      console.log(`Posición ${i}: 🐑 oveja  -> total ovejas hasta ahora: ${sheepCount}`);
    } else {
      console.log(`Posición ${i}: 🐺 lobo   -> UPS!!! Wolfs eaten Sheeps`);
    }
  }

  console.log('---');

  if (sheepCount === 0) {
    return "UPS!!! Wolfs eaten Sheeps";
  }

  return `There are ${sheepCount} sheep in total`;
}

// Caso de prueba 1
const list1 = [
  true,  true,  true,  false, true,  true,  true,  true,  true,  false,
  true,  false, true,  false, false, true,  true,  true,  true,  true,
  false, false, true,  true
];

console.log(countSheeps(list1)); // There are 17 sheep in total
