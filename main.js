import "./src/styles/settings/colors.css"; //primeiro carregando as cores
import "./src/styles/generic/reset.css"; //depois os generics
import "./src/styles/elements/base.css"; //por fim os elementos
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

//declaração de variáveis utilizando '$' significa que aquela variável guarda alguma referencia da tela!
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
   "beforeend",
   `
      ${PlayerName("Player 1")}
      ${PlayerName("Player 2")}
      ${BoardGame(6)}
   `
);
