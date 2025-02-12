const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];
let go = "circle";
let gameActive = true;

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameboard.append(cellElement);
  });
}
createBoard();

function addGo(e) {
  if (!gameActive) return; // Stop if game is over
  console.log("clicked", e.target);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  e.target.removeEventListener("click", addGo);
  checkScore();
}

function checkScore() {
  const allSquare = document.querySelectorAll(".square");
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombo.forEach((array) => {
    const circleWins = array.every(
      (cell) =>
        allSquare[cell].firstChild &&
        allSquare[cell].firstChild.classList.contains("circle")
    );

    const crossWins = array.every(
      (cell) =>
        allSquare[cell].firstChild &&
        allSquare[cell].firstChild.classList.contains("cross")
    );

    if (circleWins) {
      infoDisplay.textContent = "Circle wins!";
      gameActive = false;
    } else if (crossWins) {
      infoDisplay.textContent = "Cross wins!";
      gameActive = false;
    }
  });
}
