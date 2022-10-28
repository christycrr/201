'use strict';
console.log('Hello World');


let userResponse = prompt('What is your name?');
console.log('user response to Q1: ' + userResponse);
alert('Hey ' + userResponse);

function questionOne(){
let userResponseTwo = prompt('What is your favorite color?');
console.log('User entered their favorite color as' + userResponseTwo);
alert('Wow ' + userResponse + 'your favorite color is ' + userResponseTwo);
}
questionOne();

function questionThree(){
let userResponseThree = prompt('Do you want to hang out with me?');
if (userResponseThree === 'yes') {
    alert('We should be friends!' + userResponse);
}
else {
    alert(`That's too bad ${userResponse}`);
}

}
questionThree();

console.log('I am now friends with' + userResponse);

function questionFour(){
let userResponseFour = prompt('Did we just become best friends?');
if (userResponseFour === 'yes') {
    alert(`Let's hang out!` + userResponse);
}
else {
    alert(`That's too bad ${userResponse}`);
}
alert('I have power tools!' + userResponseFour);
}
questionFour();

function questionFive(){
console.log(userResponseFour + 'is our best friend');
let userResponseFive = prompt('Could ya learn to love me?');
if (userResponseFive === 'yes') {
    alert('Smart' + userResponse);
}
else {
    alert(`That's too bad ${userResponse}`);
}
}
questionFive();

function questionSix(){
console.log(userResponse + 'Could learn to love me');
alert('These are my waters');
let userResponseSix = prompt('Do you like Old Greg?');
if (userResponseSix === 'yes') {
    alert(`He's actually hilarious!` + userResponse);
}
else {
    alert(`That's too bad ${userResponse}`);
}
console.log(' userResponse + likes Old Greg');
alert(`Don't forget to drink water`);
}
questionSix();

// LAB 3






/*
alert('Welcome to my guessing game!');

while (!userResponse) {
    user = prompt('Guess my favorite number 1 through 6');
  }

for(let i = 0; i < nums.length; i++) 
{


    let userGuess = prompt('Guess what number I am thinking of');

let clueGuesses = 6;
let User = 'userResponse';
let User = false;
{if(consoleGuess === User)
Found = true;
}
let answer 6 = prompt
*/


let attempts = 0;
let numbersix;

while (attempts<6) {
     numbersix = prompt('what is my favorite number?');
    if (numbersix == 7) {
        alert('I can\'t believe you guessed it!');
        attempts=6;
    }
    else if (numbersix > 7) {
        alert('Too high!');
        attempts++;
    }
    else if (numbersix < 7) {
        alert('Too low!');
        attempts++;
    }
    else{
        alert('That\'s not a number');
        attempts++;
    }
    
}
// console.log(nums);
// let userInput = prompt
// let nums = ["1, 2, 3, 4, 5];
//if (userInput === 'nums 1, 2, 3, 4, 5') {
//  alert('That\'s not it! + userResponse');
//}
//else {
//alert('Thank you for visiting my page' + userResponse);
// JavaScript will live here
// 