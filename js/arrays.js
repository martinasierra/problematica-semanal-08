//**********
//**Arrays**
//**********

/* a) Given the following array: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] display by console the months 5 and 11 */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log('Month 5: ' + months[4]);
console.log('Month 11: ' + months[10]);

/* b) Sort the array of months alphabetically and display it by console */
const alphabetically = months.sort();
console.log(alphabetically);

/* c) Add an element to the beginning and end of the array */
months.unshift('Cornelia');
months.push('Pompeia');
console.log(months);

/* d) Remove an element from the beginning and end of the array */
months.shift();
months.pop();
console.log(months);

/* e) Invert the order of the array */
const reversed = months.reverse();
console.log(reversed);

/* f) Join all the elements of the array in a single string where each month is separated by a hyphen */
console.log(months.join('-'));

/* g) Create a copy of the array of months that contains from May to November */
const initialMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(initialMonths.slice(4,11));