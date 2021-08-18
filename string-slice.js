const anthem = "Amar sonar bangla ami tomai hate kori na ";
const words = anthem.split(' ');
const withWords = anthem.split('a');
// console.log(withWords);

const smallSlice = anthem.slice(5,13);
// console.log(smallSlice);

 // Substr
 const anotherPart = anthem.substr(11,6);
//  console.log(anotherPart);

// SubString 
 const anotherPart2 = anthem.substring(11,15);
 console.log(anotherPart2);

 // Concat jora lagano
 const first = 'Amader';
 const second = "city";
//  const fullString = first + second;
 const fullString = first.concat(second).concat('Jannat').concat('Bushra');
//  console.log(fullString);


 const words2 = ['alim', 'babul', 'cable', 'darren','eva']; 
//  const joined = words2.join('');
//  const joined = words2.join(' ');
//  const joined = words2.join(',');
//  const joined = words2.join(', ');
 const joined = words2.join('wwww');
 console.log(joined);