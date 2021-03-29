//***********
//**Strings**
//***********

/* a) Create a string variable with at least 10 characters and convert all the text to uppercase */
let stringUpper = 'How to Be Perfect';
console.log(stringUpper.toUpperCase());

/* b) Create a string variable with at least 10 characters and generate a new string with the first 5 characters saving the result in a new variable */
let stringSubstring1 = 'Get some sleep';
let stringPrefix = stringSubstring1.substring(0,5);
console.log(stringPrefix);

/* c) Create a string variable with at least 10 characters and generate a new string with the last 3 characters saving the result in a new variable */
let stringSubstring2 = 'Do not give advice';
let stringSuffix = stringSubstring2.substring(stringSubstring2.length - 3, stringSubstring2.length);
console.log(stringSuffix);

/* d) Create a string variable with at least 10 characters and generate a new string with the first letter in uppercase and the others in lowercase saving the result in a new variable */
let stringUpAndLow = 'take Care Of Your Teeth';
let firstUpper = stringUpAndLow.substring(0,1);
let restLower = stringUpAndLow.substring(1,stringUpAndLow.length);
let firstUpRestLow = firstUpper.toUpperCase() + restLower.toLowerCase();
console.log(firstUpRestLow);

/* e) Create a string variable with at least 10 characters and some blank space. Find the position of the first blank space and save it to a variable */
let stringWithBlankSpace = 'Eat an orange every morning';
let firstBlankSpace = stringWithBlankSpace.indexOf(' ');
console.log(firstBlankSpace);

/* d) Create a string variable with at least 2 long words (10 characters and some space in between). Use the methods of the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase. */
let stringUpAndLow2 = 'cONTEMPLATE eVERYTHING';
let firstUp = stringUpAndLow2.substring(0,1);
let restLow = stringUpAndLow2.substring(1,stringUpAndLow2.indexOf(' '));
let firstUp2 = stringUpAndLow2.substring(stringUpAndLow2.indexOf(' '), stringUpAndLow2.indexOf(' ') + 1);
let restLow2 = stringUpAndLow2.substring(stringUpAndLow2.indexOf(' ') + 1);
let firstLettersUp = firstUp.toUpperCase() + restLow.toLowerCase() + firstUp2.toUpperCase() + restLow2.toLowerCase();
console.log(firstLettersUp);