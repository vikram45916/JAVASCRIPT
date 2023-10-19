const btn = document.querySelector(".submit");
const number = document.querySelector(".count");

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener("click",generateNumber);
