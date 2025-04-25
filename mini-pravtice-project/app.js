

let todo = [];

let request = prompt("enter the item of list : ");

let indx = 1;


while(true){

    if(request == "quit"){
        console.log("app is exitng.......");
        break;
    }

   else if (request == "list"){
    for (item of todo){

        console.log(item);
    }
   }
   else if (request == "add"){

    let added = prompt("enter the list item: ");
    todo.push(added);
    
    console.log(added);


   }

   else if ( request == "delete"){
    todo.slice(indx, 1);
   }
}