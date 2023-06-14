/*
//check leap year
function checkLeapYear(year){
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !==0){
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}

checkLeapYear(2026);


//count vowels in a sentence
const vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function countVowels(sentence){
    let count=0;
    const letters = Array.from(sentence)
    letters.forEach(function(value){
        if (vowels.includes(value)){
            count++;
        }
    })
}

countVowels("I love Bangladesh");


//check duplicates
const num = [3, 1, 2, 3, 5, 7, 9, 5, 5]

const duplicates = num.filter(function(value, index, array){
    return array.indexOf(value) !== index
});

console.log(duplicates);



console.log(unique);


 const sentence = "I am I am I am I am I am I am I am";

 const matches = sentence.match(/am/i);
 console.log(matches);


 //check unique
const numbers = [3, 1, 2, 3, 5, 7, 9, 5, 5]

const unique = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index
});


let myAge = 24
let humanDogRatio = 2

let myDogAge = myAge * humanDogRatio
console.log(myDogAge) 


let bonusPts = 50
console.log(bonusPts)
bonusPts += 50
console.log(bonusPts)
bonusPts -= 75
console.log(bonusPts)
bonusPts += 45
console.log(bonusPts)



let lap1 = 34
let lap2 = 33
let lap3 = 35

function lapTimes(l1,l2,l3) {
    console.log(`sum of lap times is ${l1+l2+l3}`)
}

lapTimes(lap1, lap1, lap1);


let lapsCompleted = 0

function incrementLaps() {
    return lapsCompleted += 1
}

incrementLaps()
incrementLaps()
incrementLaps()
console.log(lapsCompleted)



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



// Grab the welcome-el paragraph and store it in a variable called welcomeEl
welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
let myName = "Muntaqa"

// and the greeting we want to render on the page
let greeting = "Welcome Back"

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + " " + myName


let count = 0
let countEl = document.getElementById('increment-btn')

function increment() {
    count += 1
    countEl.innerText = count
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}

*/


// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')

let count = 0
let countEl = document.getElementById('count-el')



function increment() {
    count += 1
    countEl.textContent = count
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
function save() {
  let entry = " " + count + " - "
  saveEl.textContent += entry 
  count = 0
  countEl.textContent = 0
}

