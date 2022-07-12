//esse tipo de importação só é possível por causa do rollup.
//No CRA é utilizado o webpack pra poder utilizar o import de um arquivo css
import "./style.css";

//ideia do JSX
function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
   return /*html*/ `
      <article class="card-game">
         <img src="images/${icon}.svg" alt="${alt}">
     </article>
   `;
}

export default CardGame;
