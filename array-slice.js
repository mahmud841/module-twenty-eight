const numbers = [8,9,5,23,54,67,78,9978,56,23];
const numberSliced = numbers.slice(4,8);
// console.log(numberSliced);
// console.log(numbers);


//Splice
/* const numberSpliced = numbers.splice(4,4);
console.log(numberSliced);
console.log(numbers) */;

const numberSpliced2 = numbers.splice(4,3,99,111,999);
console.log(numberSpliced2);
console.log(numbers);