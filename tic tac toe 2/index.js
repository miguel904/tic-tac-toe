 const boxes = Array.from(document.getElementsByClassName('box'));
//console.log(boxes);
const playerText = document.querySelector("#playerText");
//const resetButton = document.querySelector("#resetButton");
 const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];

const X_TEXT = "X";
const O_TEXT = "O";
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
let gameOver = false

function boxClicked(e) {
     if (gameOver){
          return
     }
    const boxIndex = e.target.dataset.boxindex
console.log(boxIndex,"index")
    if(!spaces[boxIndex]){
        spaces[boxIndex] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() === true  ){
           gameOver = true
            playerText.innerHTML = `${currentPlayer} has won!`
return 

        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
   }
}
resetButton.addEventListener('click', resetGame)

function resetGame(){
   spaces.fill(null)

boxes.forEach( box => {
     box.innerText =''
})}
// add last = to x_text & O's
function playerHasWon() {
    if(spaces [winConditions[0][0]] === X_TEXT && spaces[winConditions[0][1]] === X_TEXT && spaces [winConditions[0][2]] === X_TEXT ){
         return currentPlayer === X_TEXT;
    }
    else if(spaces [winConditions[1][0]] === X_TEXT && spaces[winConditions[1][1]] === X_TEXT && spaces [winConditions[1][2]] === X_TEXT ){
     return currentPlayer === X_TEXT;

    } else if(spaces [winConditions[2][0]] === X_TEXT && spaces[winConditions[2][1]] === X_TEXT && spaces [winConditions[2][2]] === X_TEXT ){
     return currentPlayer === X_TEXT;
    }
    else if(spaces [winConditions[3][0]] === X_TEXT && spaces[winConditions[3][1]] === X_TEXT && spaces [winConditions[3][2]] === X_TEXT ){
     return currentPlayer === X_TEXT;
}
else if(spaces [winConditions[4][0]] === X_TEXT && spaces[winConditions[4][1]] === X_TEXT && spaces [winConditions[4][2]] === X_TEXT){
     return currentPlayer === X_TEXT;
}
else if(spaces [winConditions[5][0]] === X_TEXT && spaces[winConditions[5][1]] === X_TEXT && spaces [winConditions[5][2]] === X_TEXT ){
     return currentPlayer === X_TEXT;

} else  if(spaces [winConditions[6][0]] === X_TEXT && spaces[winConditions[6][1]] === X_TEXT && spaces [winConditions[6][2]] ){
     return currentPlayer === X_TEXT;

}  else  if(spaces [winConditions[7][0]] === X_TEXT && spaces[winConditions[7][1]] === X_TEXT && spaces [winConditions[7][2]] ){
     return currentPlayer === X_TEXT;
};

if( spaces[winConditions[0][0]] === O_TEXT && spaces[winConditions[0][1]] === O_TEXT && spaces[winConditions[0][2]]){
     return currentPlayer === O_TEXT;
}
 else if( spaces[winConditions[1][0]] === O_TEXT && spaces[winConditions[1][1]] === O_TEXT && spaces[winConditions[1][2]]){
     return currentPlayer === O_TEXT;
}

else if( spaces[winConditions[2][0]] === O_TEXT && spaces[winConditions[2][1]] === O_TEXT && spaces[winConditions[2][2]]){
     return currentPlayer === O_TEXT;
}
else if( spaces[winConditions[3][0]] === O_TEXT && spaces[winConditions[3][1]] === O_TEXT && spaces[winConditions[3][2]]){
     return currentPlayer === O_TEXT;

}
if( spaces[winConditions[4][0]] === O_TEXT && spaces[winConditions[4][1]] === O_TEXT && spaces[winConditions[4][2]]){
     return currentPlayer === O_TEXT;
}
if( spaces[winConditions[5][0]] === O_TEXT && spaces[winConditions[5][1]] === O_TEXT && spaces[winConditions[5][2]]){
     return currentPlayer === O_TEXT;    
}
if( spaces[winConditions[6][0]] === O_TEXT && spaces[winConditions[6][1]] === O_TEXT && spaces[winConditions[6][2]]){
     return currentPlayer === O_TEXT;
}
if( spaces[winConditions[7][0]] === O_TEXT && spaces[winConditions[7][1]] === O_TEXT && spaces[winConditions[7][2]]){
     return currentPlayer === O_TEXT;
};
}
startGame();


