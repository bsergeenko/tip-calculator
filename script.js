const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = [...document.querySelectorAll(".but")];
const customInput = document.getElementById("custom");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const error = document.getElementById("error");

let billValue = 0; 
let peopleValue = 0;
let percent = 0;

let tipAmount = 0;
let total = 0;

billInput.addEventListener("input", (event) => {
    if (!event.target.value){
        billValue = 0;
    } else {
        billValue = +event.target.value;
    }
    calculation();
})

tipButtons.map((button) => {
    button.addEventListener("click", (event) => {
        tipButtons.forEach((elem) => {
            elem.classList.remove("change-color");
        })
        button.classList.add("change-color");
        percent = parseFloat(event.target.innerText);
        calculation();
    })
})

customInput.addEventListener("input", (event) => {
    percent = +event.target.value;
    calculation();
})

peopleInput.addEventListener("input", (event) => {
    peopleValue = +event.target.value;

    if (event.target.value == 0) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
    calculation();
})

reset.addEventListener("click", (event) => {
    totalResult.innerText = `$0.00`;
    tipResult.innerText = `$0.00`;
    event.target.value = 0;
})

function calculation() {
    if(!peopleValue || !percent) {
        tipResult.innerText = `$0.00`;
        totalResult.innerText = `$0.00`;
    } else {
        tipAmount = billValue * (percent/100) / peopleValue;
        total = billValue/peopleValue + tipAmount;

        tipResult.innerText = `$${tipAmount.toFixed(2)}`;
        totalResult.innerText = `$${total.toFixed(2)}`;
    }
}
function reset() {
    location.reload();
};