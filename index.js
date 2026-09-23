
/*buttons animations*/
const logo = document.querySelector(".logo");
const gameButtons = document.querySelectorAll(".game-buttons button");

logo.addEventListener("mouseenter", () => {
    gameButtons.forEach((button) => {
        button.classList.add("pulse");
    });
});

logo.addEventListener("mouseleave", () => {
    gameButtons.forEach((button) => {
        button.classList.remove("pulse");
    });
});

const reset = document.querySelector("#resetBtn");
const gameButtons2 = document.querySelectorAll(".game-buttons button");

reset.addEventListener("mouseenter", () => {
    gameButtons2.forEach((button) => {
        button.classList.add("pulse");
    });
});

reset.addEventListener("mouseleave", () => {
    gameButtons2.forEach((button) => {
        button.classList.remove("pulse");
    });
});

/*game logic*/

// 1. Select all the HTML elements we need to update
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
const resetBtn = document.getElementById("resetBtn");

const statusTitle = document.querySelector(".status-title");
const choiceContainer = document.querySelector(".choice h1");

const winLabel = document.getElementById("win");
const loseLabel = document.getElementById("lose");
const tiesLabel = document.getElementById("ties");

// 2. Setup score counters
let wins = 0;
let loses = 0;
let ties = 0;

// Array to easily convert numbers back to emojis for the display
const emojiMap = ["", "✊", "✋", "✌️"];

// 3. Core game logic function
function playGame(playerChoice) {
  // Generate a random number between 1 and 3 every time a button is clicked
  // 1 = Rock, 2 = Paper, 3 = Scissors
  const computerChoice = Math.floor(Math.random() * 3 + 1);

  let result = "";

  // Determine the winner
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    ties++;
  } else if (
    (playerChoice === 1 && computerChoice === 3) || // Rock beats Scissors
    (playerChoice === 2 && computerChoice === 1) || // Paper beats Rock
    (playerChoice === 3 && computerChoice === 2)    // Scissors beats Paper
  ) {
    result = "You Win!";
    wins++;
  } else {
    result = "You Lose!";
    loses++;
  }

  // 4. Update the text elements on the HTML page
  statusTitle.innerText = result;
  
  // Update choices display: e.g., "You ✊, Computer ✋"
  choiceContainer.innerHTML = `You <label>${emojiMap[playerChoice]}</label>, Computer <label>${emojiMap[computerChoice]}</label>`;

  // Update scores layout
  winLabel.innerText = wins;
  loseLabel.innerText = loses;
  tiesLabel.innerText = ties;
}

// 5. Event Listeners for the game buttons
// We explicitly pass the values (1, 2, or 3) into the playGame function
rockButton.addEventListener("click", () => playGame(1));
paperButton.addEventListener("click", () => playGame(2));
scissorButton.addEventListener("click", () => playGame(3));

// 6. Reset functionality
resetBtn.addEventListener("click", () => {
  wins = 0;
  loses = 0;
  ties = 0;
  winLabel.innerText = "0";
  loseLabel.innerText = "0";
  tiesLabel.innerText = "0";
  statusTitle.innerText = "Game Reset! Make a move.";
  choiceContainer.innerHTML = `You <label>✌️</label>, Computer <label>✌️</label>`;
});
