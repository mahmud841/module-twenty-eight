const myFavDate = new Date("1971-12-16");
// console.log(myFavDate);
const anotherDate = new Date (1971,3,26,11,40,50,90);
console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getTime()){
    console.log('favourite is earlier');
}