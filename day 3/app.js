


// console.log("pattern printing in js  ");

// for (let i = 0; i <= 5; i++) {

//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += "* "
//     }

//     console.log(row);
// }

// console.log("Pattern printing in JS:");

// for (let i = 5; i >= 0; i--) {
//     let row = "   ";
//     for (let j = 0; j <= i; j++) {
//         row += " *";
//     }
//     console.log(row);
// }


// console.log("square pattern in JS");

// for (let i=0; i<4; i++){

//     let row = "";
//     for(let j=0; j< 5; j++){
//         row += " *";
//     }


//     console.log(row);
// }




// console.log("side trangle in js ");


// for(let i=0; i<=5; i++){


//     for(let k=0; k<=5; k++){

//        console.log(" ");
//     }

//     let row = "";

// for(let j=0; j<=i; j++){

//     row += " *";
// }

//     console.log(row);
// }


// // objects 

// console.log("object Litral");

// let student = {
//    name: "rishi",
//   rollNumber: 28,
//   age : 21
// };

// const post ={

//     like : 20,
//     Comment : "very nice bro",
//     tags : ["@rishi" , "@rishikes"]

// }

// let result = post.like;

// // console.name(student.name);
// console.log(result);

// console.log(post["like"]);

// student["name"];




console.log("object litral add new value and delete the value");

let batch = {

    name : "rishi",
    div : "A",
    rollNumber : 18,

};

let newValue = ( batch.name = "karan" );
let newValue1 = ( batch.marks = [150,160,170] );
console.log(newValue); // new value add
console.log(batch);  // new array add
console.log(newValue1); 

let delet = delete batch.div; // delete the value

console.log(delet);