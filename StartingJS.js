var Input = function(inputType, message){
    var userInput = (prompt(message));
    if (inputType === "Year"){
        if (isNaN(userInput) || parseInt(userInput)> 2022 || userInput.length > 4) {        
            userInput = Input(inputType, "Please Enter a Valid Year of Birth e.g 2019");       
        }
    }
    else if (inputType === "Month"){
        if (isNaN(userInput) || parseInt(userInput)> 12 || parseInt(userInput) < 1) {        
            userInput = Input(inputType, "Please Enter a Valid Month e.g 1 - 12");       
        }
    }

    else if (inputType === "Day"){
        if (isNaN(userInput) || parseInt(userInput)> 31 || parseInt(userInput) < 1) {        
            userInput = Input(inputType, "Please Enter a Valid Day of Birth e.g 1 - 31");       
        }
    }
    return userInput;
}

var Year = Input("Year", "please Enter Your Year of Birth");
var Month = Input("Month", "please Enter Your Month of Birth");
var Day = Input("Day", "please Enter Your Day of Birth");
console.log(Year, Month, Day);








