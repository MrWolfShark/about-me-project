
"use strict";

// prompts user with welcome message and sets answer as username
let username = prompt("Hello! What is your name?");

//create var score and sets to 0
let correctAnswerCount = 0;

console.log("username= " + username);

alert(`Welcome to Aaron's About Me Page ${username}!\n Please look around and learn more about Aaron. There is a button at the bottom of the page to take the quiz at the end!`);

alert("Thanks for learning about Aaron. Please answer the following 5 Yes or No questions followed by 2 open answer questions.");
function questionOne() {
  while (true) { 
    // Asks user question
    let question = prompt("1. Was Aaron born in Kansas?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of incorrect answer
      alert("That's incorrect. Aaron was born in Texas.");
      // breaks loops
      break;
      //evaluates answer to see if no
    } else if (question.toUpperCase() == "NO" || question.toUpperCase() == "N") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      correctAnswerCount++;
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}
function questionTwo() {
  while (true) {
    // Asks user question
    let question = prompt("2. Was Aaron a member of the United States Air Force?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      correctAnswerCount++;
      // breaks loops
      break;
      //evaluates answer to see if no
    } else if (question.toUpperCase() == "NO" || question.toUpperCase() == "N") {
      // alerts user of incorrect answer
      alert("That's incorrect. Aaron was a member of the United States Air Force.");
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}
function questionThree() {
  while (true) {
    // Asks user question
    let question = prompt("3. Did Aaron focus on data center networking in career?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of incorrect answer
      alert("That's incorrect. Aaron focused on network security.");
      // breaks loops
      break;
      //evaluates answer to see if no
    } else if (question.toUpperCase() == "NO" || question.toUpperCase() == "N") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      correctAnswerCount++;
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}
function questionFour() {
  while (true) {
    // Asks user question
    let question = prompt("4. Has Aaron travelled outside the US?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      correctAnswerCount++;
      // breaks loops
      break;
      //evaluates answer to see if no
    } else if (question.toUpperCase() == "NO" || question.toUpperCase() == "N") {
      // alerts user of incorrect answer
      alert("That's incorrect. Aaron has visited many countries during his time in the military.");
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}
function questionFive() {
  while (true) {
    // Asks user question
    let question = prompt("5. Is Aaron's short term goal to be the Director of Engineering Services at his company?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct!");
      // adds 20 to score
      correctAnswerCount++;
      // breaks loops
      break;
      //evaluates answer to see if no
    } else if (question.toUpperCase() == "NO" || question.toUpperCase() == "N") {
      // alerts user of incorrect answer
      alert("That's incorrect. Aaron's short term goal is to be the Director of Engineering Services.");
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}
function questionSix() {
// sets number of attempts allowed 
  let attempts = 4;
  //generates random number between 1 and 20
  var randomNumber = Math.floor(Math.random() * 20) + 1;
  // logs random number to console
  console.log(`randomNumber = ${randomNumber}`);
  // loops while attempts is greater than 0
  while (attempts) {
    // asks user for number and stores answer
    let answer = prompt(`Guess a number between 1 and 20.`);
    // converts string to number
    answer = parseFloat(answer);
    // logs number to console
    console.log(`answer = ${answer}`)
    // of answer is less than or equal to 20 
    if (answer <= 20){
      // if answer is equal to random number the answer is correct, loop breaks, adds 1 to correct answers
      if (answer === randomNumber) {
        alert(`You are a great guesser! That's correct!`);
        correctAnswerCount++;
        break;
      // else if answer is larger than number tell user
      } else if (answer > randomNumber) {
        alert(`That's not the right number. Maybe try a smaller one.`);
        // subtract 1 from attempts
        attempts--;
      // else if answer is smaller than number tell user
      } else if (answer < randomNumber) {
        alert(`That's not the right number. Maybe try a bigger one.`);
        // subtract 1 from attempts
        attempts--;
      }  
    // if answer is not in range tell user to try again
    } else {
      alert(`That number is not from 1 to 20. Try again!`);
    }
  }
}

// array of possible answers
let listOfColors = ['GREEN', 'BLUE', 'PURPLE', 'WHITE', 'BLACK', 'RED', 'YELLOW', 'ORANGE', 'CYAN', 'MAGENTA', 'BROWN', 'TAN']
// arrays of correct answers
let listOfAnswers = ['GREEN', 'BLUE', 'PURPLE']

// sets attempts to 6 for next question
attempts = 6

while (attempts) {
  // prompts question and gives possible answers
  let answer = prompt(`What is one of Aaron's favorite colors?\nPossible Answers:\n\n${listOfColors[0]}\n${listOfColors[1]}\n${listOfColors[2]}\n${listOfColors[3]}\n${listOfColors[4]}\n${listOfColors[5]}\n${listOfColors[6]}\n${listOfColors[7]}\n${listOfColors[8]}\n${listOfColors[9]}\n${listOfColors[10]}\n${listOfColors[11]}\n`);


  // logs answer to console
  console.log(`answer = ${answer}`)

  // subtracts 1 from attempts
  attempts--;
  
  // loops through correct answers to see if answer is correct
  for (let i = 0; i < listOfAnswers.length; i++) {
    if (answer.toUpperCase() === listOfAnswers[i]) {
      alert(`That's correct. ${listOfAnswers[i]} is a fabuluous color!`);
      // increments correctAnswerCount by 1
      correctAnswerCount++;
      // sets attempts to 0 to break while loop
      attempts = 0;
      // break for loop
      break;
    } else {
      continue;
    }
  }
}

// math for score calculation
let score = correctAnswerCount / 7
score = Math.round(score * 100)

// evaluates score and alerts user of score
if (correctAnswerCount == 0 || correctAnswerCount <= 2) {
  alert(`Thanks for completing the quiz ${username}!\n You scored ${score}%! D:`)
} else if (correctAnswerCount >= 3 && correctAnswerCount <= 5) {
  alert(`Thanks for completing the quiz ${username}!\n You scored ${score}%! :)`)
} else if (correctAnswerCount == 6 || correctAnswerCount == 7)  {
  alert(`Thanks for completing the quiz ${username}!\n You scored ${score}%! :D`)
} 
