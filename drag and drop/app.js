const king = document.querySelector(".chess-piece");
console.log(king);

const squares = document.querySelectorAll(".square");
const info = document.querySelector("#info");

king.addEventListener("drag", (e) => {
  console.log(e.target.id + " is being dragged");
});

king.addEventListener("dragstart", (e) => {
  console.log(e.target.id + " dragging has started");

  // Use the actual image as the drag image
  const img = new Image();
  img.src = king.src; // Use the source of the image being dragged
  e.dataTransfer.setDragImage(img, 0, 0);
});

// Loop through each square and add event listeners
squares.forEach((square) => {
  square.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow dropping
    console.log("You are dragging over " + e.target.classList);
  });

  square.addEventListener("dragenter", (e) => {
    console.log("You are entering " + e.target.classList);
  });

  square.addEventListener("dragleave", (e) => {
    console.log("You are leaving " + e.target.classList);
  });

  square.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent default action (open as link for some elements)
    console.log("You are dropping in " + e.target.classList);
    e.target.append(king); // Move the king piece to the square
  });
});

king.addEventListener("dragend", (e) => {
  console.log("You have dropped " + e.target.id);
});
