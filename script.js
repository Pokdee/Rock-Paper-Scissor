const resultContainer = document.querySelector(".result");

const choice = ["rock", "paper", "scissor"];

const getComChoice = () => {
  return choice[Math.floor(Math.random() * 3)];
};

const playRound = function (playersel, comsel = getComChoice()) {
  playersel = playersel.toLowerCase();
  comsel = comsel.toLowerCase();
  if (playersel !== comsel) {
    if (
      (playersel === "scissor" && comsel !== "rock") ||
      (playersel === "paper" && comsel !== "scissor") ||
      (playersel === "rock" && comsel !== "paper")
    ) {
      // console.log(`${playersel} beat ${comsel},you win`);
      return "player";
    } else {
      // console.log(`${comsel} beat ${playersel},you lose`);
      return "com";
    }
  } else {
    return "Draw";
  }
};

const game = function () {
  let playersel = prompt("Please input your choice");
  while (playersel === null || undefined || false) {
    playersel = prompt("Please input your choice");
  }
  const winner = playRound(playersel);
  return winner;
};

const Showresult = function (win, winnertag, playertag, comtag) {
  winnertag.textContent = win;

  resultContainer.appendChild(winnertag);
  resultContainer.appendChild(playertag);
  resultContainer.appendChild(comtag);
};

let playerScore = 0;
let comScore = 0;

const gameStart = function (e) {
  if (e.target.classList.contains("btn")) {
    //

    //
    const player = e.target.textContent;
    const result = playRound(player);
    if (result !== "Draw") {
      if (result === "player") {
        playerScore = ++playerScore;
      } else {
        comScore = ++comScore;
      }
    } else {
      // console.log("Draw");
    }
    // }
    if (playerScore === 5 || comScore === 5) {
      const winner = document.createElement("h1");
      const playerResult = document.createElement("h2");
      const comResult = document.createElement("h2");

      playerResult.innerText = `player Scores = ${playerScore}`;
      comResult.innerText = `Computer Scores = ${comScore}`;

      // if (playerScore !== comScore) {
      if (playerScore > comScore) {
        Showresult("player Win", winner, playerResult, comResult);
      } else {
        Showresult("Computer Win", winner, playerResult, comResult);
      }
      // } else {
      //   console.log("no one win ");
      //   console.log("player", playerScore, "com", comScore);
      // }
    }
  }
};

window.addEventListener("click", gameStart);
