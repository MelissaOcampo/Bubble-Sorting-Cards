/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// La función "window.onload" se ejecutará cuando se haya completado la carga de la página.
window.onload = function() {
  // Declaro un Array vacio, para despues poder almacenar datos.
  let arrayCarta = [];

  // Creo la función que genera una carta ramdom.
  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    // Esta línea de código esta generando un número entero aleatorio, para usar como indice en un arreglo entre 0 y 1.
    // Math.random(): De la clase Math genera un número pseudo-aleatorio.
    // Math.random() * palos.length: Aquí se está multiplicando el número aleatorio generado por el tamaño del arreglo palos el resultado será un número decimal entre 0 y "palos.length". Por ejemplo, si palos.length es 4, podría generarse un número como 2.46710987.
    // Math.floor: Sirve para redondear el número decimal hacia abajo a un entero, Por ejemplo, en el ejemplo anterior, Math.floor(2.46710987) devolvería 2.
    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumero = Math.floor(Math.random() * numeros.length);

    console.log(palos[indexPalo], numeros[indexNumero]);

    // Condicional que comprueba si el palo de la carta es un corazón o un diamante, si se cumple se ejecutara el codigo dentro del bloque.
    if (palos[indexPalo] === "♥" || palos[indexPalo] === "♦") {
      // Esto agrega una nueva tarjeta a HTML con un id de "carta".
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
            <div class="top text-start ms-2" >${palos[indexPalo]}</div>
            <div class="number text-center">${numeros[indexNumero]}</div>
            <div class="bottom mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}</div
        </div>`;
      // Esto agrega un nuevo objeto al final del arrayCarta.
      arrayCarta.push({
        palo: palos[indexPalo],
        numero: numeros[indexNumero]
      });
    } else {
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
    <div class="top text-start ms-2" >${palos[indexPalo]}</div>
    <div class="number text-center">${numeros[indexNumero]}</div>
    <div class="bottom mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}</div
</div>`;
      arrayCarta.push({
        palo: palos[indexPalo],
        numero: numeros[indexNumero]
      });
    }
    return arrayCarta;
  }
  //Función sortar cartas
  function sortearCard() {
    document.getElementById("card").innerHTML = "";
    // Bucle for para recorrer el arrayCarta // comenzando en 0, mas 1 por vuelta

    for (let i = 0; i <= arrayCarta.length - 1; i++) {
      let sortearPalo = arrayCarta[i].palo;
      let sortearNumero = arrayCarta[i].numero;

      // Condicional que comprueba si el palo de la carta es un corazon o un diamante, si se cumple se agregara a la carta.
      if (sortearPalo == "♥" || sortearPalo == "♦") {
        document.getElementById(
          "card"
        ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
<div class="top text-start text-danger ms-2">${sortearPalo}</div>
<div class="number text-center" >${sortearNumero}</div>
<div class="bottom text-danger mx-2" style="transform:rotate(180deg);">${sortearPalo}</div>
</div>`;
      } else {
        document.getElementById(
          "card"
        ).innerHTML += `<di class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
<div class="top text-start ms-2">${sortearPalo}</div>
<div class="number text-center">${sortearNumero}</div>
<div class="bottom mx-2" style="transform:rotate(180deg);">${sortearPalo}</div>
</div>`;
      }
    }
    arrayCarta = [];
  }

  // Creamos una variable cartas como un array vacio.
  let cartas = [];

  // Función imput // Donde el usuario especifica la cantidad de cartas que quiere ver
  function cartasInput(input) {
    document.getElementById("card").innerHTML = "";

    // Ciclo for //
    for (let i = 1; i <= input; i++) {
      let newCard = ramdomCard();
      cartas.push(newCard);
    }
  }

  // Esta función convierte las letras A, K, Q y J a números.
  function letrasANumeros() {
    for (let i = 0; i <= arrayCarta.length - 1; i++) {
      if (arrayCarta[i].numero === "A") {
        arrayCarta[i].numero = 14;
      }
      if (arrayCarta[i].numero === "K") {
        arrayCarta[i].numero = 13;
      }
      if (arrayCarta[i].numero === "Q") {
        arrayCarta[i].numero = 12;
      }
      if (arrayCarta[i].numero === "J") {
        arrayCarta[i].numero = 11;
      }
    }
  }

  // Esta función convierte las letas A, K, Q y J a números.
  function numerosALetras() {
    for (let i = 0; i <= arrayCarta.length - 1; i++) {
      if (arrayCarta[i].numero === 14) {
        arrayCarta[i].numero = "A";
      }
      if (arrayCarta[i].numero === 13) {
        arrayCarta[i].numero = "K";
      }
      if (arrayCarta[i].numero === 12) {
        arrayCarta[i].numero = "Q";
      }
      if (arrayCarta[i].numero === 11) {
        arrayCarta[i].numero = "J";
      }
    }
  }

  // Tecnica de ordenamiento de bubbleSort, para ordenar un array de objetos en el valor de la propiedad números.
  const bubbleSort = arr => {
    let wall = arr.length - 1; //Esta línea declara una variable llamada "wall" y le asigna el valor de "arr.length - 1". "Wall" se utilizará como una barrera para el segundo bucle while.

    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];

          arr[index] = arr[index + 1]; //Esta línea reemplaza el valor del objeto en la posición "index" con el valor del objeto en la posición "index + 1".

          arr[index + 1] = aux; // Esta línea reemplaza el valor del objeto en la posición "index + 1" con el valor temporal en "aux".
        }
        index++; // Esta línea incrementa el valor de "index" en 1.
      }
      wall--; // Esta línea decrementa el valor de "wall" en 1.
    }
    return arr; // Al final del bucle, se devuelve el array ordenado.
  };

  document.getElementById("barajarcartas").addEventListener("click", () => {
    let valor = document.getElementById("input");
    cartasInput(valor.value);
  });
  document.getElementById("ordenarcartas").addEventListener("click", () => {
    letrasANumeros();
    bubbleSort(arrayCarta);
    numerosALetras();
    sortearCard();
  });
};

//Para darle otro toque más personal

//Declaro una variable para darme una Bienvenida en la consola
let nombre = "Melissa";

// template literals
console.log("Bienvenida " + nombre + " te estabamos esperando");
