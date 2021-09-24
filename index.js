const read = require("readline-sync")

 var userName = read.question("What's your name: ");
 var welcomeMsg = "Welcome " + userName + " Let's see how much you know about me.."
 console.log("\n" + welcomeMsg)

console.log("\nThere will be some MCQ questions where you have to enter your choice (put only choice number).\nYou will get +1 score for every right answer.\So, let's get start")

 var score = 0;
//this is function
 function question(que, options, corAns) {
     console.log("\n" + que)
     for (var i = 0; i < options.length; i++) {
         console.log(`${i + 1}. ${options[i]}`);     }
     usrAns = read.question("Your Choice: ");
     if (usrAns == corAns) {
         score += 1;
        
        console.log('\nCongratulations..! You made correct choice');
     }

     else {
                console.log(`\n You are wrong..! Correct Answer is ${options[corAns - 1]}.`);
    } 
      console.log(`Your current Score: ${score}`)
 }


 question("Where do I live?", ["Delhi", "Pune", "Bangalore", "Dehradun"], 4);
 question("Which is my favorite colour?", ["Red", "Orange", "Blue"], 3);
 question("What is my age?", [18, 19, 21, 22], 4);

 question("What is my favorite fast-food?", ["Burger", "Sandwich", "Pizza", "Noodles"], 3);
 question("Which country I dream to visit?", ["Paris", "Iceland", "UK", "USA"], 2);
 question("Which is my favorite drink?", ["Tea", "Coffee"], 1);

 function finalRes(score) {
    if (score >= 4) {
        console.log("\n\nIt seems You know me well")
     }    else {
         console.log("\n\n It seems you don't know me well")
    }
    console.log(`\nYou Scored ${score}/6. \nGood Bye ${userName}..! See You Again`)
 }
 finalRes(score);