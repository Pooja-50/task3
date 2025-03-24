const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let previousValue = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentValue = "";
            previousValue = "";
            operator = "";
            display.value = "";
        } else if (value === "=") {
            if (previousValue && currentValue && operator) {
                currentValue = eval(previousValue + operator + currentValue);
                display.value = currentValue;
                previousValue = "";
                operator = "";
            }
        } else if ("+-*/".includes(value)) {
            operator = value;
            previousValue = currentValue;
            currentValue = "";
        } else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
