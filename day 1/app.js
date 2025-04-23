

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