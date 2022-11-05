//* *********** Leer nodos *********** *//
console.log('*********** Leer nodos ***********');
/**
 * Nombre: getElementById
 * Descripción: Devuelve una referencia al elemento por su ID
 * Fuente: https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
 */
console.log(document.getElementById('firstName'));

/**
 * Nombre: getElementsByTagName
 * Descripción: Devuelve una lista de elementos con un nombre determinado. Se busca en el documento completo, incluyendo el nodo raíz.
 * Fuente: https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName
 */
console.log(document.getElementsByTagName('input'));

/**
 * Nombre: getElementsByClassName
 * Descripción: Retorna un objecto similar a un array (nodeList) de los elementos hijos que tengan todos los nombres de clase indicados.
 * Fuente: https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName
 */
console.log(document.getElementsByClassName('form-control'));

/**
 * Nombre: querySelector
 * Descripción: Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
 * Fuente: https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
 */
console.log(document.querySelector('.form-control'));
console.log(document.querySelector('div[class="form-check"]'));

/**
 * Nombre: querySelectorAll
 * Descripción: El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
 * Fuente: https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
 */
console.log(document.querySelectorAll('.form-control'));
console.log(document.querySelectorAll('div[class="form-check"]'));

//* *********** NodeLists vs Array *********** *//
console.log('*********** NodeLists vs Array ***********');

const nodeList = document.querySelectorAll('div');
console.log(nodeList);

/**
 * La principal diferencia es que NodeList carece de operaciones
 * que los Arrays si tienen, por ejemplo:
 *    Operaciones en común:
 *      - length
 *      - forEach
 *    Operaciones propias de Array:
 *      - map
 *      - some
 *      - filter
 *      - reduce
 */

/**
 * Para pasar un NodeList a Array, se usa la nomenclatura de ES6
 */
const nodeListAsArray = [...nodeList];
console.log(nodeListAsArray);
