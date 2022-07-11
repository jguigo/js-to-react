import "./src/styles/settings/colors.css"; //primeiro carregando as cores
import "./src/styles/generic/reset.css"; //depois os generics
import "./src/styles/elements/base.css"; //por fim os elementos
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

//declaração de variáveis utilizando '$' significa que aquela variável guarda alguma referencia da tela!
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
   "beforeend",
   `
      ${ScoreBoard()}      
      ${BoardGame(6)}
   `
);
