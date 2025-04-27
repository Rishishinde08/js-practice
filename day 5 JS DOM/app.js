

// let btn = document.querySelector("button");
let btnss =  document.querySelectorAll("button");

console.dir(btnss);


for(btns of btnss){
    
    // btns.onclick = saySomthing;
    // btns.onclick = sayNothing;


    btns.addEventListener("click", sayNothing);
    btns.addEventListener("click", saySomthing);
}


function sayNothing (){
    console.log("clicked by rishi");
}


function saySomthing (){
    console.log("button was clicked!!!");
};