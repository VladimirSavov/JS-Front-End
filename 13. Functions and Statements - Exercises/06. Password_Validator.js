function validator(password){
    let length = true;
    let onlyLettersAndDigits = true;
    let leastTwoDigits = true;
    let countDigit = 0;
    if(password.length < 6 || password.length > 10){
        length = false;
    }
    for (let i = 0; i < password.length; i++) {
        if((password.charCodeAt(i) >= 48 || password.charCodeAt(i) <= 57) || (CharCodeAt(password[i]) >= 65 || CharCodeAt(password[i]) <= 90) || (CharCodeAt(password[i]) >= 97 || CharCodeAt(password[i]) <= 122)){
            onlyLettersAndDigits = true;
        }else{
            onlyLettersAndDigits = false;
        }        
    }
    for (let k = 0; k < password.length; k++) {
        if(password.charCodeAt(k) >= 48 || (password.charCodeAt(k) <= 57)){
            countDigit++;
        }
        
    }
    if(countDigit < 2){
        leastTwoDigits = false;
    }
    if(leastTwoDigits && length && leastTwoDigits){
        console.log('Password is valid');
    }
    if(!length){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!onlyLettersAndDigits){
        console.log("Password must consist only of letters and digits");
    }
    if(!leastTwoDigits){
        console.log("Password must have at least 2 digits");
    }
}

validator('Pa$s$s');