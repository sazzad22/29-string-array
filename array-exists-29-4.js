//todo 29-4 Check an Array using isArray, indexOf, includes, concat

//? Array.isArray(friends)  will check if the passed argument is an array of not.

function megaFriend(friends) {
  //the functin is to find the name inside and array with the longest length.

  if (Array.isArray(friends) == false) {
    return "Please give an array";
  }

  let mega = friends[0]; //this one is dicleared to compare and then keep the extracted value from the loop
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["kutub", "Lion", "Shamol", "Sabbir"];
// const myBigBuddy = megaFriend(friends);
const myBigBuddy = megaFriend(1234);

console.log(myBigBuddy); //Please give an array

//? indexOf('') it checks the element's index inside an array
if (friends.indexOf("Lion  ") != -1) {
  console.log("lion exists");
}

//? includes() it checks if the element is in the array of string
if (friends.includes("Lion")) {
  console.log("lion exists using includes");
}

//? concat() - it adds two array into one array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);
