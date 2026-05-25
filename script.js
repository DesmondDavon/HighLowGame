// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;
  var targetNumber = 12;

  // TODO: Create a variable to track how many guesses the player has made
  let attempts = 0;

  // Create a variable to store the player's current guess
  let guess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number

  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts

  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message
  while (guess !== targetNumber) {
    for (let i = 0; i < 100; i++) {
      guess = parseInt(window.prompt("Guess a Number:"));
      attempts++;
      if (guess > targetNumber) {
        window.alert("Too high! Try again.");
      } else if (guess < targetNumber) {
        window.alert("Too low! Try again.");
      } else {
        window.alert(
          `Congratulations! You guessed the number in ${attempts} attempts!`,
        );
        const playAgain = window.confirm("Do you want to play again?");
        if (playAgain) {
          playHighLowGame();
        } else {
          window.alert("Thanks for playing! See Yah!");
        }
      }
    }
  }
}


// 🚀 Call the function to start the game
playHighLowGame();