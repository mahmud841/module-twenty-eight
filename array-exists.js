function megaFriend(friends) {
    if(Array.isArray(friends) == false) {
        return "Please provide an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length){
            mega = friend;
        }
    }
}
const friends = ['kutub', 'Lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriend(1434367);
// console.log(myBigBuddy);

if (friends.indexOf('ion') != -1){
    console.log('Lion exists');
}
else{
    console.log('Fox doen not exist');
}
if (friends.includes('Lion')){
    console.log("Lion exists using includes");
}

//concat
const first = [1,2,3,5];
const second =[4,6,8,9];
const combined = first.concat(second);
console.log(combined);
