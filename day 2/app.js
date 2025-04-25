

// String operation 


let a = "   Rishi   ";

let str1 = "Risikesh";


console.log(a.trim());
console.log(a.toLowerCase());
console.log(a.toUpperCase());
  let str = a.trim().toUpperCase();
  console.log(str);

  let slic = str1.slice(5);
  let slic1 = str1.slice(1,2);
  let slic2= str1.slice(-2);
  console.log("slice the str",slic);
  console.log("start to end ",slic1);
  console.log("last se chalu" ,slic2);

  let rep = str1.replace("r","h");
  console.log(rep);
  console.log(str1.replace("e","h"));



//   arrays in js 

let array = ["rishi", "karana", "tushar" , "aman" , "tejas"];
let array1 = ["rishi", "karana", "tushar" , 5 ,6 ,4 ,8 ];
let array2 = [1,2,3,4, 5 ,6 ,4 ,8 ];

// console.log(array.length);
// console.log(array1.length);
// console.log(array2.length);

// array[1] = "akshay";
// console.log(array);

// array[10] = "akshay";
// console.log(array);



// arrays method 


// array.push("prem");
// console.log(array)

// array.pop("prem");
// console.log(array)


// array.unshift("prem");
// console.log(array);

// // array.shift();
// // console.log(array);

let arr = ["rishi", "karana", "tushar" , "aman" , "tejas"];
let arr2 = [1,2,3,4, 5 ,6 ,4 ,8 ];


let new1 = arr.indexOf("rishi");
console.log(new1);

let new2 = arr.includes("rishi");
console.log(new2);

let new3 = arr.concat(arr2);
console.log(new3);

// console.log(arr2.reverse());


console.log(arr2.slice(4));

console.log(arr2.splice());



let arr4 = [1,2,352,3,,8,4,22,66 ,4 ,8 ];

arr.sort();
console.log(arr);


