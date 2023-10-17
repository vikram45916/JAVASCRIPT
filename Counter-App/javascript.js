const count = document.querySelector(".count");
// const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
// const add = document.querySelector(".add");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
    };
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0; 
    } ;
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
    };
});







