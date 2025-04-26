


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

    name: "rishi",
    div: "A",
    rollNumber: 18,

};

let newValue = (batch.name = "karan");
let newValue1 = (batch.marks = [150, 160, 170]);
console.log(newValue); // new value add
console.log(batch);  // new array add
console.log(newValue1);

let delet = delete batch.div; // delete the value

console.log(delet);



console.log("Nested object of JS ");

const classInfo = {

    aman: {
        name: "aman",
        rollNumber: 18
    },

    rishi: {
        name: "rishi",
        rollNumber: 19
    },

    tushar: {
        name: "tushar",
        rollNumber: 28
    }
};

console.log(classInfo);

let data = classInfo.aman;
console.log(data);


// value change 

classInfo.aman.name = "Aman";



// array of object 

let home = [

    {
        name: "Altaf",
        rent: 1000

    },

    {
        name: "prem",
        rent: 5000

    }

];


let personName = home[0].name ;
let person = home[0] ;
console.log(`  --- > personName ${personName}`);
console.log(person);



