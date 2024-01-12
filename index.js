function generatorPassword(){
    const passwordLength = document.getElementById("passwordLength").value;
    const lowerCaseChars = document.getElementById("lowerCaseChars");
    const upperCaseChars = document.getElementById("upperCaseChars");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const passwordResult = document.getElementById("passwordResult");

    let allowChars = "";
    let yourPassWord = "";
    const lowerCase= "abcdefghijklmnopqrstuvwxyz";
    const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers= "1234567890";
    const symbols= "!@#$%^&*()_+=";
   // let isChecked = 

    allowChars += lowerCaseChars.checked ? lowerCase : "";
    allowChars += upperCaseChars.checked ? upperCase : "";
    allowChars += includeNumbers.checked ? numbers : "";
    allowChars += includeSymbols.checked ? symbols : "";

    if(allowChars==""){
        passwordResult.textContent = "Please select a option.";
    } 
    else{
        for(let i = 0; i < passwordLength; i++){
            let indexNumber = Math.floor(Math.random() * allowChars.length);
            yourPassWord += allowChars[indexNumber];
        }
        passwordResult.textContent = "Your Password is: " + yourPassWord;
    }

}