

// let btn = document.querySelector("button");
let btnss =  document.querySelectorAll("button");

console.dir(btnss);


for(btns of btnss){
    
    btns.onclick = saySomthing;
    btns.onclick = sayNothing;


    btns.addEventListener("click", sayNothing);
    btns.addEventListener("click", saySomthing);



}


function sayNothing (){
    console.log("clicked by rishi");
}


function saySomthing (){
    console.log("button was clicked!!!");
};



let btn = document.querySelector("button");


btn.addEventListener("click" , function (){

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor(); //value assign
    h3.innerText = randomColor; // value apply
    

    let div = document.querySelector("div");

    div.style.backgroundColor = randomColor;

    console.log("color updated");
  

}
);

function getRandomColor () {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}