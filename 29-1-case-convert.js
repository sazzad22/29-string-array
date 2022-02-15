//todo toLowerCase() is a function used with dot notation and to make the letters of a string lower case.


const userInput = 'whIteGold';
const savedUserdName = 'whiteGOLD';
console.log(userInput.toLowerCase());
console.log(savedUserdName.toLowerCase());
if (userInput.toLowerCase() == savedUserdName.toLowerCase()) {
    console.log('user exists');
}
