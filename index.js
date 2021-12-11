var read = require("readline-sync");
var chalk = require("chalk");

/**
 * Welcome message
*/

var userName = read.question("What is your name? ");
let name = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(chalk.blue("\nWelcome '" + name + "' lets check - How Well Do You Know Me Questions'? \n"));

/**
 * Storing Data
*/

var score = 0;

var main = [
  { question: "Am I more then 23 years old? ", ans: "no" },
  { question: "My favourite food is Biriyani? ", ans: "yes" },
  { question: "My favourite indoor game is? ", ans: "dota" },
  { question: "Am I introvert? ", ans: "yes" },
  { question: "What is My surname? ", ans: "bagchi" },
  { question: "My favourite footballer is? ", ans: "ronaldo" },
]

var highScore = [
  { name: "Suvo", score: 4 },
]


/**
 * Create function
*/

function quiz(userAns, myAns) {
  if (userAns.toLowerCase() === myAns.toLowerCase()) {
    console.log(chalk.green("WOW!!! Right Answer"));
    score += 1
    console.log("Score is: " + score);
    console.log("------------------");
  } else {
    console.log(chalk.red("You are wrong!!! \nThe answer is: " + myAns));
    score -= 1
    console.log("Score is: " + score);
    console.log("------------------");
  }
}


function loop() {
  for (let i = 0; i < main.length; i++) {
    var userAns = read.question(chalk.yellow(main[i].question));
    var myAns = main[i].ans
    quiz(userAns, myAns);
  }
}


function checkScore() {
  console.log(chalk.magentaBright("High scores of other player:"));
  console.log(chalk.blueBright("Name | Score"));
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + " | " + highScore[i].score);
    if (highScore[i].score > score) {
      console.log("------------------");
      console.log("Nice Try, but " + highScore[i].name + " is better then you.");
    } else {
      console.log("------------------");
      console.log("Congrats! You've beaten the highscorer!! \n\n" + chalk.black.bgWhite.bold("Feel free to send me the screenshot of your score to get featured on the Leaderboard!"));
    }
  }
}


/**
 * function calling
*/

loop();
checkScore();
