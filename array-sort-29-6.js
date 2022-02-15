//todo 29-6 Have fun with sort and reverse a javascript array

//? sort() - eta diye ekta array er elements guloke serial onijai shajano hoy
const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//! The sort() and reverse() method overwrites the original array. 

//? sort, reverse methods and use of sort reverse in the same line
const friends = ["kabli", "josim", "razzak", "anwar", "deepjol", "badsha"];
const sortedFriends = friends.sort();
console.log(sortedFriends);// ['anwar', 'badsha', 'deepjol', 'josim', 'kabli', 'razzak'] //sorted according to alphabet

//? reverse
const reversedFriends = friends.reverse();
console.log(reversedFriends);// ['razzak', 'kabli', 'josim', 'deepjol', 'badsha', 'anwar']
const reversedSortedFriends = friends.sort().reverse();
console.log(reversedSortedFriends);


//? big numbers sorting
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedBigNumbers);


function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;

}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
