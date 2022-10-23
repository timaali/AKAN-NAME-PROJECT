var Input = function(){
    var yearOfBirth = parseInt(prompt("please Enter Your Year of Birth"));
    
    if (yearOfBirth === NaN || yearOfBirth > 2022 || yearOfBirth.toString().length > 4) {
        Input();
    }
    }

    Input();









