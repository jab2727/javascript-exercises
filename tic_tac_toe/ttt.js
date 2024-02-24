const gameBoard = {
  TL: "",
  TM: "",
  TR: "",
  ML: "",
  MM: "",
  MR: "",
  BL: "",
  BM: "",
  BR: "",
};

let currentPlayer = 1;

const gameSpaces = document.getElementsByClassName("XorO");

for (let i = 0; i < gameSpaces.length; i++) {
  gameSpaces[i].addEventListener("click", boardStateUpdate);
}

function boardStateUpdate() {
  if (gameBoard[this.id] == "") {
    playerMove(this.id);
    console.log(currentPlayer);
  }
}

function playerMove(space) {
  const newX = document.createElement("p");
  if (currentPlayer == 1) {
    gameBoard[space] = "X";
    newX.innerHTML = "X";
    winChecker();
    currentPlayer = 2;
  } else {
    gameBoard[space] = "O";
    newX.innerHTML = "O";
    winChecker();
    currentPlayer = 1;
  }
  openSpace = document.getElementById(space);
  openSpace.appendChild(newX);
}

function winChecker() {
  let winCheck = false;
  if (
    gameBoard.MM !== "" &&
    ((gameBoard.MM == gameBoard.TM && gameBoard.MM == gameBoard.BM) ||
      (gameBoard.MM == gameBoard.ML && gameBoard.MM == gameBoard.MR) ||
      (gameBoard.MM == gameBoard.TL && gameBoard.MM == gameBoard.BR) ||
      (gameBoard.MM == gameBoard.TR && gameBoard.MM == gameBoard.BL))
  ) {
    winCheck = true;
  } else if (
    gameBoard.TL !== "" &&
    ((gameBoard.TL == gameBoard.TM && gameBoard.TL == gameBoard.TR) ||
      (gameBoard.TL == gameBoard.ML && gameBoard.TL == gameBoard.BL))
  ) {
    winCheck = true;
  } else if (
    gameBoard.BR !== "" &&
    ((gameBoard.BR == gameBoard.TR && gameBoard.BR == gameBoard.MR) ||
      (gameBoard.BR == gameBoard.BM && gameBoard.BR == gameBoard.BL))
  ) {
    winCheck = true;
  }
  if (winCheck == true) {
    const winMessage = document.createElement("p");
    winMessage.innerHTML = `Player ${currentPlayer} wins!`;
    const messageSpace = document.getElementById("scoreboard");
    messageSpace.appendChild(winMessage);
  }
}
