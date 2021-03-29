//*******
//**For**
//*******

/* a) Create an array that contains 5 words and loop through the array using a JavaScript for loop to display an alert using each of the words. */
const colors = ['blue', 'black', 'red', 'yellow', 'green'];
for (let i = 0; i <= 4; i++) {
    alert(colors[i]);
  };

/* b) In the above array, convert the first letter of each word to uppercase and display an alert for each modified word. */
for (let j = 0; j<= 4; j++) {
    alert(colors[j].substring(0,1).toUpperCase() + colors[j].substring(1));
}

/* c) Create a variable called "sentence" that has an empty string, then to the array of point a), go through it with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete chain. */
let sentence = '';
for (let i = 0; i <= 4; i++) {
    sentence += colors[i];
};
alert(sentence);

/* d) Create an empty array and with a for loop of 10 repetitions fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements within the array, from number 0 to number 9. Display the final array in the browser console. */
let array = [];
for (let k = 0; k <= 9; k++) {
array[k] = k;
};
console.log(array);