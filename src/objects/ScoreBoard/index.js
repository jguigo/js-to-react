import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
   return /*html*/`
      <header class="score-board">
      ${PlayerName("Player 1")}
      ${PlayerName("Player 2")}
      </header>
   `;
}

export default ScoreBoard;
