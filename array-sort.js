const numbers = [4,7,1,3,9,2,5];
const sortNumbers = numbers.sort();
console.log(sortNumbers);

const friends = ['kabil','josim','razzak', 'manna','aamir'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// const reverse = friends.reverse();
// console.log(reverse);

const sortedReverse = friends.sort().reverse();
console.log(sortedReverse);

// number sorting fun
const bigNumbers = [66,58,81,92,9,6,37,13,2,445,];
const sortedNumbers = bigNumbers.sort(function (a,b){
    return a-b;
});
console.log(sortedNumbers);