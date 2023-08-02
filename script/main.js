const display = document.getElementById ("display");
const inputNumber= document.getElementById ("inputNumber");

function find(x) {
    return x == '.'
}

function checkOddEven() {
    let num = inputNumber.value
    if (Array.from(num.toString()).find(find)) {
        display.innerHTML = "OOPPS Invalid"
    }
    else if (num % 2 === 0 && num !== '') {
        display.innerHTML = "EVEN"
    }
    else if (num % 2 > 0 && num !== '') {
        display.innerHTML = "ODD"
    }
    else {
        display.innerHTML = "Input Number"
    }
}