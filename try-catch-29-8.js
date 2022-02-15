//todo 29-8 Different types of Error object and explore Try-catch

const name = 'ami';

try {
    name = 'tumi'; //anything inside try even if that is an error the code still won't show any error
}
catch (err) {
    console.error(err); //this part is to show what kind of error happened

}

const task = "Practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");
console.log(index);

const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));



    
const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());

