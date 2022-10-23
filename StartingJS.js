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

    else if (inputType === "Gender"){
        if (!(["F", "M"].includes(userInput))){        
            userInput = Input(inputType, "Please Enter a Valid Gender e.g F or M");       
        }    
    }
    return userInput;
}
var akanName = function(Year, Month, Day, Gender){ 
  var maleNames = ["Kwasi","Kwadow","Kwabena","Kwaku","Yow","Kofi","Kwame"];
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var CC = parseInt(Year.slice(0,2));
  var YY = parseInt(Year.slice(-2));
  var MM = parseInt(Month);
  var DD = parseInt(Day);
  
  var dayOfTheWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  console.log(dayOfTheWeek);
  if (Gender === "F"){
    return femaleNames[dayOfTheWeek]
  }
  else{
    return maleNames[dayOfTheWeek]
  }
}

var Year = Input("Year", "please Enter Your Year of Birth");
var Month = Input("Month", "please Enter Your Month of Birth");
var Day = Input("Day", "please Enter Your Day of Birth");
var Gender = Input("Gender", "please Enter Your Gender F or M");
console.log(Year, Month, Day, Gender);
var Name = akanName(Year, Month, Day, Gender);

console.log(Name);








