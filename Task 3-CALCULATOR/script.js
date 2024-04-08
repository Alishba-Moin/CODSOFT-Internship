let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");


function calculate() {
    try {
        const result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = "Error";
    }
}
buttons.forEach(button => {
    button.addEventListener('click',(e) => {
        const buttonText = e.target.innerHTML;
        if(buttonText == "="){
            calculate();
    }
    else if(buttonText == "AC"){
        result = "";
        input.value = result;
    }
    else if(e.target.innerHTML == "DEL"){
        input.value = input.value.slice(0 , -1)  
    } 
    else{
        input.value += buttonText
    }
    })
});
