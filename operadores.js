//Función para encontrar el número mayor entre varios números
function encontrarMayor( num1, num2, num3 ) {
    let numeros = [num1, num2, num3];

    let mayor = num3// Asumimos que el num3  es el mayor inicialmente


    // Iterar sobre los números restantes para encontrar el mayor
    for (let i = 0 ; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];S
        }
    }

    return mayor;
}

// Ejemplo de uso:
let num1 = 1;
let num2 = 2;
let num3 = 3;

// Llamada a la función para encontrar el mayor
let resultado = encontrarMayor(num2,num2,num3);

console.log(`El número mayor es:   `);
console.log(resultado)