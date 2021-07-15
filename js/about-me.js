
"use strict";

// prompts user with welcome message and sets answer as username
let username = prompt("Hello! What is your name?");

//create var score and sets to 0
let score = 0;

console.log("username= " + username);

alert("Welcome to Aaron's About Me Page " + username + "!\n Please look around and learn more about Aaron. There is a button at the bottom of the page to take the quiz at the end!");

//function to run question4
function question1() {
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
      score += 20
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}

//function to run question2
function question2() {
  while (true) {
    // Asks user question
    let question = prompt("2. Was Aaron a member of the United States Air Force?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      score += 20
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

//function to run question3
function question3() {
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
      score += 20
      // breaks loop
      break;
      // catch all for any other input
    } else {
      // alerts for invalid answer
      alert("That is not a valid answer. Try again.")
    }
  }
}

//function to run question4
function question4() {
  while (true) {
    // Asks user question
    let question = prompt("4. Has Aaron travelled outside the US?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct! Next question.");
      // adds 20 to score
      score += 20
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

//function to run question5
function question5() {
  while (true) {
    // Asks user question
    let question = prompt("5. Is Aaron's short term goal to be the Director of Engineering Services at his company?");
    // evaluates answer to see if yes
    if (question.toUpperCase() == "YES" || question.toUpperCase() == "Y") {
      // alerts user of correct answer
      alert("That's Correct!");
      // adds 20 to score
      score += 20
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

//function to run quiz
function quiz() {
  alert("Thanks for learning about Aaron. Please answer the following 5 Yes or No questions.");
  question1();
  question2();
  question3();
  question4();
  question5();

  // evaluates score and alerts user of score
  if (score == 0 || score == 20) {
    alert("Thanks for completing the quiz " + username + "!\n You scored " + score + "%! D:\n Did you even read the page??? Aaron is a very complex person with a rich history. Guessing will get you nowhere in the quiz. Please read carefully and try again. Have a great day!")
  } else if (score == 40 || score == 60) {
    alert("Thanks for completing the quiz " + username + "!\n You scored " + score + "%! :)\n I appreciate you glancing over this page, but it will take some more review before you can say you really know Aaron. Please read carefully and try again. Have a great day!")
  } else if (score == 80 || score == 100)  {
    alert("Thanks for completing the quiz " + username + "!\n You scored " + score + "%! :D\n Thanks so much for learning everything about Aaron. You are truly dedicated to learning and are probably a fine scholar. Please feel free to go on to other pages as you have learned all you can from this one. Have the bestest of day! <3")
  } 
}