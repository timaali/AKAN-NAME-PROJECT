var Input = function(message){
    var yearOfBirth = (prompt(message));
    console.log(isNaN(yearOfBirth)); //For Debugging
    console.log(yearOfBirth); //For debugging
    if (isNaN(yearOfBirth) || parseInt(yearOfBirth)> 2022 || yearOfBirth.length > 4) {
        
        Input("Please Enter a Valid Year of Birth e.g 2019");
    }
    }

    Input("please Enter Your Year of Birth");









