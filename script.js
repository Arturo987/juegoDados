"use strict";

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let puntuacion = 20;
let record = 0;

const desplegarMensaje = function (mensaje) {
  document.querySelector(".mensaje").textContent = mensaje;
};

document.querySelector(".comprobar").addEventListener("click", function () {
  const adivinar = Number(document.querySelector(".adivinar").value);
  console.log(adivinar, typeof adivinar);

  // Cuando no hay input
  if (!adivinar) {
    desplegarMensaje("⛔️ No es el número");

    // Cuando el jugador gana
  } else if (adivinar === numeroSecreto) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    desplegarMensaje("🎉 Número Correcto");
    document.querySelector(".numero").textContent = numeroSecreto;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".numero").style.width = "30rem";

    if (puntuacion > record) {
      record = puntuacion;
      document.querySelector(".record").textContent = record;
    }

    // Cuando el número es incorrecto
  } else if (adivinar !== numeroSecreto) {
    if (puntuacion > 1) {
      desplegarMensaje(
        adivinar > numeroSecreto ? "📈 Demasiado alto" : "📉 Demasiado bajo!"
      );
      puntuacion--;
      document.querySelector(".puntuacion").textContent = puntuacion;
    } else {
      desplegarMensaje("💥 Has perdido la partida");
      document.querySelector(".puntuacion").textContent = 0;
    }
  }
});

document.querySelector(".repetir").addEventListener("click", function () {
  puntuacion = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;

  desplegarMensaje("Empezar a adivinar...");
  document.querySelector(".puntuacion").textContent = puntuacion;
  document.querySelector(".numero").textContent = "?";
  document.querySelector(".adivinar").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".numero").style.width = "15rem";
});
