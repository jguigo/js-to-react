import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
   window.CardFrontBack = {};
   window.CardFrontBack.handleClick = (event) => {
      const $origin = event.target;
      const $cardFrontBack = $origin.closest(".card-front-back"); //pega o elemento mais próximo pela referencia!

      //toggle vai fazer uma checagem se a classe existe ou não, se não exister, ele adiciona e se existe ele remove!
      $cardFrontBack.classList.toggle("-active");
   };

   return /*html*/ `
   <article class="card-front-back" onClick="CardFrontBack.handleClick(event)">
      <div class="card -front">
         ${CardGame()}
      </div>
      <div class="card -back">
         ${CardGame("javascript", "Logo do Javascript")}
      </div>
   </article>`;
}
export default CardFrontBack;
