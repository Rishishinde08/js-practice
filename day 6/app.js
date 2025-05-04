

let student =  {
    name: "altaf",
    div: "A",
    roll_number: 23

}

console.log(student);


console.log(student.name);


// student["name"]
// 'altaf'
// student.name
// 'altaf'
// student



// update the value 

student.name = "shaziya altaf shaikh";

console.log(student);

console.log(student.name);

// delete the value 

delete student.div;



// nested objects 

const classInfo ={
    altaf : {
        age: 30,
        gender: "female"
    },

    rishi: {
        age: 20,
        gender: "male"
    },

    akshay:{
        age:18,
        gender: "chakka"
    }
}


// update 
classInfo.altaf.age = 20;


// array of object 

const classInfoArray =[
         {
        age: 30,
        gender: "female"
    },

    {
        age: 20,
        gender: "male"
    },

    {
        age:18,
        gender: "chakka"
    }
];
