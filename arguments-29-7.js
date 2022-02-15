//todo 29-7 Unlimited parameters to a function using arguments
function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13);
console.log(sum);
//? the above scenario has two parameters passed in.
//? if there were more than two or couple of more parameters passed in the above setup wont work

//? In cadse of alot of parameters passed in arguments can be used in the function. This
//? arguments is an array like object. But not really an array. No push or pull is possible. but the elements can accessed through loop .
function addNumbers2(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result += num;
    }
    return result;
}

const sum2 = addNumbers2(23, 13, 50, 100, 45, 76, 198, 901);
console.log(sum2);
