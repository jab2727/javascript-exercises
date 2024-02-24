function gameBoard() {
  let board = {
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

  const getBoard = () => board;

  let currentPlayer = 1;

  function boardStateUpdate(id) {
    if (board[id] == "") {
      playerMove(id);
      console.log(currentPlayer);
    }
  }

  const playerMove = (space) => {
    const newX = document.createElement("p");
    if (currentPlayer == 1) {
      board[space] = "X";
      newX.innerHTML = "X";
      winChecker();
      currentPlayer = 2;
    } else {
      board[space] = "O";
      newX.innerHTML = "O";
      winChecker();
      currentPlayer = 1;
    }
    openSpace = document.getElementById(space);
    openSpace.appendChild(newX);
  };

  const winChecker = () => {
    let winCheck = false;
    if (
      board.MM !== "" &&
      ((board.MM == board.TM && board.MM == board.BM) ||
        (board.MM == board.ML && board.MM == board.MR) ||
        (board.MM == board.TL && board.MM == board.BR) ||
        (board.MM == board.TR && board.MM == board.BL))
    ) {
      winCheck = true;
    } else if (
      board.TL !== "" &&
      ((board.TL == board.TM && board.TL == board.TR) ||
        (board.TL == board.ML && board.TL == board.BL))
    ) {
      winCheck = true;
    } else if (
      board.BR !== "" &&
      ((board.BR == board.TR && board.BR == board.MR) ||
        (board.BR == board.BM && board.BR == board.BL))
    ) {
      winCheck = true;
    }
    if (winCheck == true) {
      const winMessage = document.createElement("p");
      winMessage.innerHTML = `Player ${currentPlayer} wins!`;
      const messageSpace = document.getElementById("scoreboard");
      messageSpace.appendChild(winMessage);
    }
  };
  return getBoard();
}

let game1 = gameBoard();
console.log(game1);

const gameSpaces = document.getElementsByClassName("XorO");

for (var i = 0; i < gameSpaces.length; i++) {
  gameSpaces[i].addEventListener("click", game1.boardStateUpdate(this.id));
}
