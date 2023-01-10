/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", ramdomCard);

  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let input = document.getElementById("input");
    let cantidadCartas = input.value;
    let arr = [];
    for (let i = 1; i <= cantidadCartas; i++) {
      let indexPalo = Math.floor(Math.random() * palos.length);
      let indexNumero = Math.floor(Math.random() * numeros.length);
      console.log(palos[indexPalo], numeros[indexNumero]);

      arr.push({
        palos: palos[indexPalo],
        numeros: numeros[indexNumero]
      });
      console.log(arr);

      if (palos[indexPalo] === "♥" || palos[indexPalo] === "♦") {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-danger" id="top">${palos[indexPalo]}</li>
                  <li class="list-group-item text-danger" id="number">${numeros[indexNumero]}</li>
                  <li class="list-group-item text-danger" id="bottom">${palos[indexPalo]}</li>
                </ul>
              </div>`;
      } else {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="top">${palos[indexPalo]}</li>
                  <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
                  <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
                </ul>
              </div>`;
      }
    }
    return arr;
  }
  ramdomCard();

  let botonOrdenar = document.getElementById("botonOrdenar");
};
