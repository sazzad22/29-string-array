//todo 29-3 How to split, slice, substr, substring, concat, join

//?   split()  ekta string ke choto choto substring er array te vag kore dey;
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
console.log(words);

const withoutA = anthem.split('a');
console.log(withoutA);

//? slice() ekta string er ekta part show korbe. () er moddhe serial no er maddhome strorting and ending of that slice indicate kora hobe.second parameter er ag prjonto letter show korbe
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);//Sonar Ba

//?  substr() - slice er motoi tobe first parameter holo starting serial no. and second parameter holo length ba koyta letter pojonto jabe.first parameter er por theke letter show kora suru korbe . fist parameter index no show korbe and ekhan thekei start hobe
//! substr() - not working for somereason

//? substring
const anotherPart = anthem.substring(1, 7);
console.log(anotherPart) //mar So

//?concat 
const first = 'amader';
const second = 'city';
//? const fullString = first + second;  - ei kajtai concat diye kora jay;
const fullString = first.concat(second).concat(' abc').concat(' radio');
console.log(fullString);//amadercity abc radio

//? join() is used to join multiple elements of an array into one string
const words2 = ['alim', 'dalim', 'rakib', 'joit'];
const allJoined = words2.join('');
console.log(allJoined);//alimdalimrakibjoit

const allJoined2 = words2.join('  ');
console.log(allJoined2);//alim  dalim  rakib  joit

