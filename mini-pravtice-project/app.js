

// let todo = [];

// let request = prompt("enter the item of list : ");

// // let indx = 1;


// while(request != "quit"){

//     if(request == "quit"){
//         console.log("app is exitng.......");
//         break;
//     }

//     if (request == "list"){
//     for(let i=0; i<=todo.length; i++ ){

//         console.log(i , todo[i]);
//     }
//    }
//    else if (request == "add"){

//     let added = prompt("enter the list item: ");
//     todo.push(added);
    
//     console.log(added);


//    }

//    else if ( request == "delete"){

// let idx = prompt("enter the item of index : ");

//  todo.slice(idx, 1);

//    }


// request = prompt("enter the item of list : ");


// }




let todo = [];

let request = prompt("Enter a command (list, add, delete, quit):");

while (request !== "quit") {
    if (request === "list") {
        console.log("------ TODO LIST ------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    } 
    else if (request === "add") {
        let added = prompt("Enter the item to add:");
        todo.push(added);
        console.log(`"${added}" added to the list.`);
    } 
    else if (request === "delete") {
        let idx = prompt("Enter the index to delete:");
        if (idx < todo.length && idx >= 0) {
            let removed = todo.splice(idx, 1);
            console.log(`Removed "${removed}" from the list.`);
        } else {
            console.log("Invalid index.");
        }
    } 
    else {
        console.log("Unknown command. Try 'list', 'add', 'delete', or 'quit'.");
    }

    request = prompt("Enter a command (list, add, delete, quit):");
}

console.log("App is exiting...");
