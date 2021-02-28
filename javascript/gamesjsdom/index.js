const RollDice = () => Math.floor(Math.random() * 6);

const clickForRandom = document.querySelector(".roll");

const clickForHold = document.querySelector(".hold");

clickForHold.classList.add("turn-1");

const p1Total = document.querySelector(".p1-current-score h3");

const p2Total = document.querySelector(".p2-current-score h3");

const player1Tag = document.querySelector(".p1 .score-newscore h1");

const player2Tag = document.querySelector(".p2 .score-newscore h1");

const player1choice = document.querySelector(".p1 .score-newscore div");

const player2choice = document.querySelector(".p2 .score-newscore div");

player1Tag.style.color = "lightgreen";

let p1Score = 0;

let p2Score = 0;

let newScore = 0;

const imgArr = [
  "images/Dice-1-a.png",
  "images/Dice-2-a.png",
  "images/Dice-3-a.png",
  "images/Dice-4-a.png",
  "images/Dice-5-a.png",
  "images/Dice-6-a.png",
];

//change turn

const changeTurn = () => {
  clickForHold.classList.toggle("turn-1");
  document.querySelector(".roll-dice").src = imgArr[0];
  newScore = 0;
  player1choice.innerHTML = newScore;
  player2choice.innerHTML = newScore;
  if (clickForHold.classList.contains("turn-1")) {
    player1Tag.style.color = "lightgreen";
    player2Tag.style.color = "darkblue";
  } else {
    player1Tag.style.color = "darkblue";
    player2Tag.style.color = "lightgreen";
  }
};

//click for random score

clickForRandom.addEventListener("click", () => {
  newScore = RollDice();
  //update score to player section
  if (clickForHold.classList.contains("turn-1")) {
    player1choice.innerHTML = newScore + 1;
  } else {
    player2choice.innerHTML = newScore + 1;
  }
  //check 1 for change turn
  if (newScore == 0) {
    if (clickForHold.classList.contains("turn-1")) {
      changeTurn();
    } else {
      changeTurn();
    }
  }
  document.querySelector(".roll-dice").src = imgArr[newScore];
});

//click for hold this score

clickForHold.addEventListener("click", () => {
  if (clickForHold.classList.contains("turn-1")) {
    p1Score += newScore + 1;
    p1Total.innerHTML = p1Score;
    changeTurn();
  } else {
    p2Score += newScore + 1;
    p2Total.innerHTML = p2Score;
    changeTurn();
  }

  //check winner
  if (p1Score >= 20 || p2Score >= 20) {
    clickForRandom.disabled = true;
    clickForHold.disabled = true;
    player1Tag.style.color = "lightgreen";
    player2Tag.style.color = "lightgreen";
    if (p1Score > p2Score) {
      document.querySelector(".banner .display-2").innerHTML =
        "Player 1 is winner";
    } else {
      document.querySelector(".banner .display-2").innerHTML =
        "Player 2 is winner";
    }
  }
});
