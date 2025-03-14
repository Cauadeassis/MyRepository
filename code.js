let numberShowed = document.querySelector("p")
let mathList = [];
document.querySelectorAll("button").forEach(button =>{
    button.className = "button";
    if (!isNaN(button.textContent.trim())) {
        button.style.backgroundColor = "pink";

   }button.addEventListener("click", function(){
        button.focus();
        setTimeout(() => {
            button.blur();
        }, 1);
    })
})
addEventListener("keydown", function(e){
    if (!isNaN(e.key) || ["+", "-", "*", "/"].includes(e.key)){
        mathList.push(e.key)
        updateDisplay();
   }if (e.key === "Backspace"){
        deleteNumber()
   }if (e.key === "Enter"){
        calculate()
   }
})
function calculator(button) {
    let number = (button.textContent)
    mathList.push(number)
    updateDisplay();
}function calculate() {
    let calculatedExpression = mathList.join("")
    let result = new Function("return " + calculatedExpression)();
    numberShowed.textContent = result;
    mathList = [result];
}function deleteNumber(){
    mathList.pop();
    updateDisplay();
}function updateDisplay(){
    numberShowed.textContent = mathList.join("");
}