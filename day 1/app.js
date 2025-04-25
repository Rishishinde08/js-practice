

// sum code 

let a = 10;
let b = 20;

console.log(a+ " + " + b + " = " + (a+b));
console.log(`sum of ${a} +  ${b} = ${a%b}`);
console.log(`sum of ${a} +  ${b} = ${a-b}`);
console.log(`sum of ${a} +  ${b} = ${a/b}`);
console.log(`sum of ${a} +  ${b} = ${a*b}`);
console.log(`sum of ${a} +  ${b} = ${a**b}`);


// if else statement 

let c = 10 ;
let d = 10 ;


if(c>d){
    console.log("this is a true value");
}else{
    console.log("this is a false value");

}


if(null){
    console.log("this is a true value");
}else{
    console.log("this is a false value");

}

if(NaN){
    console.log("this is a true value");
}else{
    console.log("this is a false value");

}

if(""){
    console.log("this is a true value");
}else{
    console.log("this is a false value");

}

if(0){
    console.log("this is a true value");
}else{
    console.log("this is a false value");
}

// switch statement 

let expresion = 10;
switch (10) {
    case 11 :
        console.log("this is a 11");
        break;
case 10 :
    console.log("this is a  10 switch opration  ");
    break;

    default:
        console.log("please change inpute");
        break;
}

//for loop 

for(let i = 0; i<=10; i++){
    console.log(`i = ${i}`);
}

// alert and promt 

// let instruct = alert("andar mat ja ");
// let promts = prompt("enter the number");
// console.log(promts);


// stirng opration 

// let pass = prompt(`Enter the password: `);
// let NewPass = pass.trim();
// console.log(NewPass); 

let str = "  Hello JavaScript!  ";
console.log(str.length); // 21
console.log(str.trim()); // "Hello JavaScript!"
console.log(str.toUpperCase()); // "  HELLO JAVASCRIPT!  "
console.log(str.includes("Java")); // true
console.log(str.slice(2, 7)); // "Hello"
console.log(str.split(" ")); // ["", "", "Hello", "JavaScript!", "", ""]

// const referance and nested arrays 


const arrays = [1,2,3,4,5];
const arrays1 = [1,2,3,4,5];

arrays.push(10);
console.log(arrays);

let arrayss = arrays;
console.log(arrayss);


// this is not possible in constant arrays 
// arrays = [1,2,3,4,5];
// console.log(arrays);



// false 
// referance tabi ata hai jab memory me ek hi location pe arrays store ho 

arrays == arrays1;


// nested arrays 

let nested = [ [1,2,30], [,2,3,5,5] ];
console.log(nested);