import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
   const $htmlCardGame = CardGame();
   const $htmlBoardGame = $htmlCardGame.repeat(amountCards) //repeat metodo de strings para repetir.

   console.log($htmlBoardGame)

   return $htmlBoardGame;
}

export default BoardGame;
