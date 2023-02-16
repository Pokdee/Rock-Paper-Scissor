const playRound = function (playersel, comsel) {
  playersel = playersel.toLowerCase();
  comsel = comsel.toLowerCase();
  if (playersel === "scissor" && comsel !== "rock") {
    console.log(`${playersel} beat ${comsel},you win`);
  } else if (playersel === "paper" && comsel !== "scissor") {
    console.log(`${playersel} beat ${comsel},you win`);
  } else if (playersel === "rock" && comsel !== "paper") {
    console.log(`${playersel} beat ${comsel},you win`);
  } else {
    console.log(`${comsel} beat ${playersel},you lose`);
  }
};

// const getComChoice = function

const playerselection = "rock";
const computerselection = "Paper";
playRound(playerselection, computerselection);

// console.log(Math.random());
