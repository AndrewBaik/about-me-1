'use strict';

//If/Else
//psuedocode
/* if (some condition met) {
  do this
} else if {
  do something different
} else {
  do a possible third thing
}*/

//code runs from top to bottom, rapidly
//write dry code, to stop repeating and keep fixes in one spot or less.

//  FIXME: what needs to be fixed
/* commented out code goes here */
//  TODO: what needs to be fixed, listing
var score = 0;

var openingAlert = alert('POP-UP QUIZ!!!! Well, guessing game but you will get the general idea');

var userName = prompt('What is your name?');

//first concatination
var userHello = alert('Why hello there ' + userName +'. Hope you are ready for some guessing!');

if (userName === 'string') {
  console.log(userHello);
  score++;
}


//question 1
var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));


//question 1 alert responses
if (petQuestion === 2) {
  alert('correct!');
  score++;
} else {
  alert('nope, sorry. I have 2 pets');
  score--;
}

//question 2
var myAge = prompt('Do you think I am older than 25? Please enter "yes" or "no".').toLocaleLowerCase();

console.log(myAge + ' was guessed by '+ userName + ' for my age.');

//option, state all the variations of yes/no
//question 2 responses
if (myAge === 'yes') {
  alert('Wow, alright I am close to 20, not over 25 yet though. I do not know if I should be insulted or complimented.')
} else {
  alert('Alright! Good job guessing!');
  score++;
}

//question 3
var realName = confirm('Rhi. Is this a nickname? \'Okay\' = \'yes\', \'cancel\' = \'no\'.');

console.log(realName + ' was guessed by ' + userName + ' for my nickname.');

//questions 3 responses
if (realName === true) {
  alert('You are definitely right! My full name is Rhiannon.');
  score++;
} else {
  alert('WaH wWwAhHhHh! Nope, it is a nickname for Rhiannon.');
  score--;
}

//questions 4 
var homeStatus = parseInt(prompt('who do you think I live with? 1) mom and dad, 2) mom, dad and grandpa, 3) alone? Answer\' 1\', \'2\', or \'3\''));

console.log(userName + ' answered '+ homeStatus + ' for homeStatus.');

//questions 4 responses
if (homeStatus === 1) {
  alert('You are kinda right.');
  score+=0.5;
} else if(homeStatus === 2){
  alert('Hoorah! You got it!');
  score++;
} else {
  alert('no, sorry. I live with ma,dad, and grampy.')
  score--;
}

//questions 5 
var siblingNum = prompt('do i have siblings? please answer \"yes\" or \"no\".').toLocaleLowerCase();


//new var to get following code to be less lengthy
var siblingGender;

console.log(userName + ' answered '+ siblingNum+ ' for if I have siblings or not.');
//question 5 responses
if (siblingNum === 'yes') {
  alert('correct! I have one sibling :) .');
  score++;
  //siblingGender being used below
 var siblingGender = prompt('are they male or female? please type \"m\" or \"f\" .').toLocaleLowerCase();

  if (siblingGender === 'f') {
    alert('Wow! '+ userName + ' is on a roll now!');
    score++;
  } else {
    alert('I have a sister, but that\'s okay. I know that guessing sibling gender can be hard.');
  }  

} else {
  alert('BWEHHHHHH, wrong. I have at least one sibling!');

  if (siblingGender === 'f') {
    alert('Wow! '+ userName + ' is got that right!');
  } else {
    alert('I have a sister, but that\'s okay. I know that guessing sibling gender can be hard.');
  }
}

/* PSEUDO CODE:
for (start ; condition ; increment) {
  code to execute;
} */

var favFood = ['sushi', 'spaghetti', 'popcorn', 'soup', 'homemade food', 'food', 'bullshit'].toLocaleLowerCase();

console.log(favFood);

for(var i = 0; i < favFood.length; i++) {
  if (ffaveFood === favFood[i] && i > 4) {
    alert('HOLY COW!! You are so lazy, and have no idea what on earth you')
  } else if(faveFood === favFood[i] && i > 4) {
    alert
  }

  /* if answer === favFood[i].toLocaleLowerCase(); {
    loiuyktfgjhgvbj
  } else {
    oiukgyfhjvcb 
  }*/

}


//final alerts

alert('thank you for playing! your results are in the next pop-up, and in that pop-up some of the answers, again.');

var userResults = alert(userName +', you got' + petQuestion +',I have 2 pets!' + myAge + ', is what you guessed for my approximate age.' + realName + ' is ' + userName + '\'s answer to the nickname question.' + 'you answered '+ homeStatus + ' for who I lived with. I live with my mom, dad, and grandpa.' + userName + ' guessed '+ siblingNum + 'for if I have siblings. Which I do, a sister. ' + userName + ' answered ' + favFood + ' for my favFood.');


//attempt later on to keep alerts shorter possibly.

console.log(userResults);
alert(userResults);
