


function printName(){

    console.log("rishi");

}
printName();



// funci roll a dise 



function diseNumber(){

let random = Math.floor(Math.random()*6)+1;
 console.log(random);


}

diseNumber();
diseNumber();
diseNumber();
diseNumber();
diseNumber();

console.log("------------------------")
  

//function with argument 


function nameStudent (name , age){
    
    console.log(`${name}'s age is ${age}`);
}

function averageNumber (a ,b ,c){
    
    let average = (a+b+c)/3;
    console.log(`average ${average}`);
}


function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

table(5);





averageNumber(2,5,3);





nameStudent("Rishi", 20);
nameStudent("karan", 255);
nameStudent("altaf", 21);
// nameStudent("Rishi", 20);