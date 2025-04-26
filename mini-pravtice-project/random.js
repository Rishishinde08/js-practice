

let max = prompt("Enter the maximum number : ");

let random = Math.floor(Math.random() * max) + 1 ;

let guess = prompt("Enter the number ");


while(true){

    if(guess == "quit"){
        console.log("exiting the game ");
        break;
    }

    if(guess == random){
        console.log("you are right number is " , random );
        break;
    }
    else {
        guess = prompt("your number is wrong enter another number : ");
    }
}
