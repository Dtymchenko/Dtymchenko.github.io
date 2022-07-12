let result = 0;
const input__quantity = document.querySelector(".input__quantity");
const select__from = document.getElementById("select__from");
const select__to = document.getElementById("select__to");
const result__number = document.querySelector(".result__number");
const switchButton = document.querySelector(".switch__button")

input__quantity.addEventListener("input", updateInfo);
select__from.addEventListener("change", updateInfo);
select__to.addEventListener("change", updateInfo);
switchButton.addEventListener("click", switchButtonClick)

function switchButtonClick() {
    let temp = select__from.value;
    select__from.value = select__to.value;
    select__to.value = temp;
    updateInfo();
    // let temp = select__from;
    // select__from = select__to;
    // select__to = temp;
}


function updateInfo() {
    if (select__from.value === select__to.value) {
        alert("We should convert " + select__to.value + " to other units"); // checking if we need to convert anything
        result__number.textContent ="error!";
    } else {
        if (select__from.value === "m") {
            if (select__to.value === "cm") {
                result = input__quantity.value * 100
            } else if (select__to.value === "in") {
                result = input__quantity.value * 39.37
            } else if (select__to.value === "ft") {
                result = input__quantity.value * 3.28084
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 1000
            } else if (select__to.value === "yd") {
                result = input__quantity.value * 1.09361
            } else if (select__to.value === "km") {
                result = input__quantity.value * 0.001
            }
        }
    
        if (select__from.value === "cm") {
            if (select__to.value === "m") {
                result = input__quantity.value / 100
            } else if (select__to.value === "in") {
                result = input__quantity.value / 2.54
            } else if (select__to.value === "ft") {
                result = input__quantity.value / 30.48
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 10
            } else if (select__to.value === "yd") {
                result = input__quantity.value / 91.44
            } else if (select__to.value === "km") {
                result = input__quantity.value / 100000
            }
        }
    
        if (select__from.value === "in") {
            if (select__to.value === "m") {
                result = input__quantity.value / 39.37
            } else if (select__to.value === "cm") {
                result = input__quantity.value * 2.54
            } else if (select__to.value === "ft") {
                result = input__quantity.value / 12
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 25.4
            } else if (select__to.value === "yd") {
                result = input__quantity.value / 36
            } else if (select__to.value === "km") {
                result = input__quantity.value / 39370.078740157
            }
        }
    
        if (select__from.value === "ft") {
            if (select__to.value === "m") {
                result = input__quantity.value * 0.3048
            } else if (select__to.value === "cm") {
                result = input__quantity.value * 30.48
            } else if (select__to.value === "in") {
                result = input__quantity.value * 12
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 304.8
            } else if (select__to.value === "yd") {
                result = input__quantity.value / 3
            } else if (select__to.value === "km") {
                result = input__quantity.value / 3280.84
            }
        }
    
        if (select__from.value === "mm") {
            if (select__to.value === "m") {
                result = input__quantity.value / 1000
            } else if (select__to.value === "cm") {
                result = input__quantity.value / 10
            } else if (select__to.value === "in") {
                result = input__quantity.value / 25.4
            } else if (select__to.value === "ft") {
                result = input__quantity.value / 304.8
            } else if (select__to.value === "yd") {
                result = input__quantity.value / 914.4
            } else if (select__to.value === "km") {
                result = input__quantity.value / 1000000
            }
        }
    
        if (select__from.value === "yd") {
            if (select__to.value === "m") {
                result = input__quantity.value * 0.9144
            } else if (select__to.value === "cm") {
                result = input__quantity.value * 91.44
            } else if (select__to.value === "in") {
                result = input__quantity.value * 36
            } else if (select__to.value === "ft") {
                result = input__quantity.value * 3
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 914.4
            } else if (select__to.value === "km") {
                result = input__quantity.value * 0.0009144
            }
        }
    
        if (select__from.value === "km") {
            if (select__to.value === "m") {
                result = input__quantity.value * 1000
            } else if (select__to.value === "cm") {
                result = input__quantity.value * 100000
            } else if (select__to.value === "in") {
                result = input__quantity.value * 39370.1
            } else if (select__to.value === "ft") {
                result = input__quantity.value * 3280.84
            } else if (select__to.value === "mm") {
                result = input__quantity.value * 1000000
            } else if (select__to.value === "yd") {
                result = input__quantity.value * 1093.61
            }
        }
    
        // result = +result.toFixed(2); // rounding
        // result = JSON.stringify(result); // changing result to JSON object
        result__number.textContent = result;
        console.log(result);
    }
}

