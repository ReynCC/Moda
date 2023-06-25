let num = parseInt(prompt("Ingrese un numero:"));
let vector = [];

function aleatorio() {
    for (let i = 0; i < num; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        vector.push(numeroAleatorio);
    }
    document.write(vector + "<br>");

    let moda = calcularModa(vector);
    document.write("La moda es " + moda.valor + " se repite " + moda.repeticiones);
}

function calcularModa(arr) {
    let contador = {};
    let moda = { valor: null, repeticiones: 0 };

    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        contador[elemento] = (contador[elemento] || 0) + 1;

        if (contador[elemento] > moda.repeticiones) {
            moda.valor = elemento;
            moda.repeticiones = contador[elemento];
        }
    }

    return moda;
}

aleatorio();