//esse tipo de importação só é possível por causa do rollup.
//No CRA é utilizado o webpack pra poder utilizar o import de um arquivo css
import "./style.css";

//ideia do JSX
function CardGame() {
    return `
      <article class="card-game">
         <img src="images/a-image.svg">
     </article>
   `;
}

export default CardGame;
