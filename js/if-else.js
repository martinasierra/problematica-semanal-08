//***********
//**If Else**
//***********

/* a) Create a random number between 0 and 1 using the Math.random () function, if the value is greater than or equal to 0.5 show an alert with the message “Greater than 0.5” and if not an alert with the message “Lower than 0.5 " */
let randomNum = Math.random();
console.log(randomNum);
if (randomNum >= 0.5) 
alert('Greater than 0.5'); 
else
alert('Lower than 0.5');

/* b) Create an "age" variable that contains an integer between 0 and 100 and displays an alert messages */
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);
if (randomInt<2) {
    alert('Baby');
} else if (randomInt >= 2 && randomInt <= 12) {
    alert('Child');
} else if (randomInt >= 13 && randomInt <= 19) {
    alert('Teen');
} else if (randomInt >= 20 && randomInt <= 30) {
    alert('Young adult');
} else if (randomInt >= 31 && randomInt <= 60) {
    alert('Adult');
 } else if (randomInt >= 61 && randomInt <= 75){
    alert('Senior adult');
 } else if (randomInt > 75) {
    alert('Elder');  
};
