// 1. What is the difference between a parameter and an argument?
//parameters are values declared within a function
//arguments are values declared with the function when being called

// 2.Within a function, what is the difference between return and console.log?
//console.log gives you a visual copy of and output
//return gives the output


const palindrone = (str) => {
    let strArr = str.split("");
    let reversedArr = strArr.reverse().join("")
    // console.log(str);
    // console.log(typeof(reversedArr));
    if(str.toLowerCase() === reversedArr.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
console.log(palindrone("Kayak"));




const sumArr = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length ; i++){
        // console.log(typeof(arr[i]));
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumArr([1, 2, 3, 4, 5, 6]);




const primeNumbers = (num) => {
    for(let i = 2; i  <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(primeNumbers(100))


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------


const arr = ["rock", "paper", "scissors"];

const randomMove = () => {
    const randomIdx = Math.floor(Math.random()* arr.length);
    return arr[randomIdx];
}

let computerMove = randomMove();
let userMove = randomMove();

const rockPaperScissors = () => {
    //rock beats scissors
    if(computerMove === 'rock' && userMove === 'scissors'){
        console.log("Computer Wins! Rock beats Scissors all day!");
    }else if (computerMove ==='scissors' && userMove === 'rock'){
        console.log("User Wins! Rock beats Scissors all day!");
    }

    //paper beats rock
    if(computerMove === 'paper' && userMove === 'rock'){
        console.log("Computer Wins! Paper beats Rock all day!");
    }else if (computerMove ==='rock' && userMove === 'paper'){
        console.log("User Wins! Paper beats Rock all day!");
    }

    //scissors beats paper
    if(computerMove === 'scissors' && userMove === 'paper'){
        console.log("Computer Wins! Scissors beats Paper all day!");
    }else if (computerMove ==='paper' && userMove === 'scissors'){
        console.log("User Wins! Scissors beats Paper all day!");
    }
    //tie
    if(computerMove === 'rock' && userMove === 'rock' || computerMove === 'paper' && userMove === 'paper' || computerMove === 'scissors' && userMove === 'scissors'){
        console.log("its a tie! try again!");
    }

}
rockPaperScissors();

//