//todo 29-5 Get part of an array and insert elements using slice, splice

//? slice(4,8) it will slice the array from 4 no index to the index before 8 no index element
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numbersSliced = numbers.slice(4, 8);
console.log(numbersSliced);
//? Though the array is sliced, the previous array remains the same.
console.log(numbers);

//? splice() -- it removes element from the array

const numbersSpliced = numbers.splice(4, 3); // herer splice (4,3) will remove element from array starting from 4 no index upto 3 elements after that
console.log(numbersSpliced); //the removed elements
console.log(numbers); //the 3 elements are removeed here
//? splice can also be used to inject elements into the array after deleting elements . injected elements will be in the place of the removed elements. injects elements can be of any amount
const numbersSpliced2 = numbers.splice(1, 1, 44, 5, 0, 343, 3);
console.log(numbersSpliced2);//the removed elements
console.log(numbers); //original array with the replaced elements included
