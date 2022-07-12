import "./style.css";

function PlayerScore(points = 0) {
   return /*html*/ `
      <ol data-points="${points}">
         <li>um</li>
         <li>dois</li>
         <li>Três</li>
      </ol>
   `;
}

export default PlayerScore;
