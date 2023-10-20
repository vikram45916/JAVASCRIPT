const btn = document.querySelector(".btn");
const res = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

    let flip = [...end].reverse().join("");
    if(start == flip){
        res.innerHTML = `${word.toLowerCase()} is a palindrome`;
    }else{
        res.innerHTML = `${word.toLowerCase()} is not a palindrome`;
    }
}
