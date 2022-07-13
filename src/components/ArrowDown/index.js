import './style.css'

function ArrowDown(currentPlayer = 1) {
   return /*html*/ `
      <img class="arrow-down"
           data-currentPlayer="${currentPlayer}"
           src="images/IconArrowDown.svg" 
           alt="ícone de uma seta para baixo">
   `
}

export default ArrowDown;
