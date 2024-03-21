/*Ejercicio 6 : Ordenamiento.
 */
//////////////-----------------------------------------////////////////////
/*
1.- Crea una función que ordene de forma descendente un arreglo de números.
Entrada -> [9,3,1,6,5,88,-1,2,7]
Salida -> [88,9,7,6,5,3,1,-1]
*/

const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];

const ejercicio1 = numeros.sort((current, next) => next - current);

console.log(ejercicio1);

// La función 'sort' recibe otra función como argumento, que define el criterio de ordenación.
// Esta función de comparación toma dos elementos del arreglo, 'current' y 'next'.
// Si el resultado de 'next - current' es negativo, 'sort' colocará 'next' antes que 'current'.
// Si es positivo, 'current' irá antes. Si es cero, no cambiará el orden.
// Al restar 'next' de 'current', estamos definiendo un orden descendente.

//////////////-----------------------------------------////////////////////
/*2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
*/

const palabras = ["b", "h", "w", "e", "a"];

function ordenarPorAscii(arr) {
  return arr.sort(
    (current, next) => current.charCodeAt(0) - next.charCodeAt(0)
  );
}

console.log(ordenarPorAscii(palabras));

//El método charCodeAt toma un índice como argumento, que indica la posición del carácter en la cadena de texto del cual quieres obtener el valor Unicode. Si no se proporciona ningún índice, por defecto se toma el primer carácter (índice 0).

////////////////-----------------------//////////////////////////
/*
3.- Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.
*/
// Definición de la clase Alumno con constructor y métodos
class Alumno {
  constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }

  obtenerPromedio() {
    const suma = this.calificaciones.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return suma / this.calificaciones.length;
  }
}

//El método reduce de JavaScript es una función de alto orden que se utiliza para reducir un array a un solo valor.

class Salon {
  constructor(alumnos) {
    this.alumnos = alumnos;
  }
  ordenarPorPromedio() {
    return this.alumnos.sort(
      (a, b) => b.obtenerPromedio() - a.obtenerPromedio()
    );
  }
}

// Ejemplo de uso de las clases:
const alumnos = [
  new Alumno("Juan", [90, 95, 85, 100, 90]),
  new Alumno("Ana", [100, 95, 100, 95, 100]),
  new Alumno("Luis", [80, 85, 80, 85, 80]),
];

const salon = new Salon(alumnos); // Creación de un objeto Salon con el arreglo de alumnos
console.log(salon.ordenarPorPromedio()); // Llamada al método para ordenar alumnos y mostrarlos

////////////////////------------------------------///////////////////////////
/* 
4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]
*/

const arreglo4 = ["adios", "hola", "maximo", "uno", "despedida"];

function ordenarMenosAMas(array) {
  return array.sort((current, next) => current.length - next.length);
}

ordenarMenosAMas(arreglo4);
console.log(arreglo4);

///////////////////////-----------------------------//////////////////////
/* 
5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
Entrada -> [[7,3],[2,2],[1,0],[4,3]]
Salida -> [[1,0],[2,2],[4,3],[7,3]]
*/

function ordenarPorDistanciaAlOrigen(coordenadas) {
  // Función para calcular la distancia euclidiana al origen
  function distanciaAlOrigen(coord) {
    return Math.sqrt(coord[0] ** 2 + coord[1] ** 2);
  }

  // Ordenamos el arreglo utilizando la función sort y nuestra función de distancia
  return coordenadas.sort(
    (a, b) => distanciaAlOrigen(a) - distanciaAlOrigen(b)
  );
}

// Ejemplo de uso:
const entrada = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
const salida = ordenarPorDistanciaAlOrigen(entrada);
console.log(salida); // [[1,0], [2,2], [4,3], [7,3]]
/*
La función distanciaAlOrigen calcula la distancia de un punto al origen usando la fórmula de la distancia euclidiana: x2+y2​
, donde ( x ) y ( y ) son las coordenadas del punto.
La función sort se utiliza para ordenar el array coordenadas. La función de comparación toma dos elementos ( a ) y ( b ), calcula su distancia al origen y los compara. Si el resultado es negativo, ( a ) se coloca antes que ( b ) en el array; si es positivo, ( b ) se coloca antes que ( a ). Esto resulta en un array ordenado de coordenadas desde la más cercana hasta la más lejana al origen.
El ejemplo de uso muestra cómo se puede llamar a esta función con un array de coordenadas y obtener un array ordenado basado en la distancia al origen.
*/
//////////////////////-------------------------//////////////////////
