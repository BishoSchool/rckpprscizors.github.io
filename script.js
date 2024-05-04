let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["rock", "paper", "scissors"];

const computerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getUserChoice = (id) => {
  const userChoice = id.replace("choice-", "");
  const compChoice = computerChoice();

  const result = getResult(userChoice, compChoice);
  displayResult(result, userChoice, compChoice);
};

const getResult = (user, computer) => {
  if (user === computer) {
    ties++;
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    wins++;
    return "You win!";
  } else {
    losses++;
    return "You lose!";
  }
};

const displayResult = (result, user, comp) => {
  const userChoiceText = capitalize(user); // Capitalize the user's choice
  document.getElementById("score").innerHTML = `
    <p>Wins: ${wins}</p>
    <p>Losses: ${losses}</p>
    <p>Ties: ${ties}</p>
    `;
  document.getElementById("result").innerHTML = `
    <p>${result}</p>
    <p>Your choice: ${userChoiceText}</p>
    <p>Computer's choice: ${comp}</p>
  `;
};

// Function to capitalize the first letter of a string
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", () => getUserChoice(choice.id));
});
