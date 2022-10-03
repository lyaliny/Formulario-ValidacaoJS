import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (evento) => {
    console.log(evento.target);
    valida(evento.target);
  });
});
