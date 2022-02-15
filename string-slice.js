//split useCase
const anthem ='Amar sonar bangla ami tomay valobashi';
const words =anthem.split(' ');
// console.log(words);

const withoutA = anthem.split('a');
// console.log(withoutA);

//slice useCase
const smallSlice =anthem.slice(5, 14);
// console.log(smallSlice);

//substr usecase
const anotherPart =anthem.substr(11, 8);
// console.log(anotherPart);

// substring useCase
const anotherAnotherPart = anthem.substring(11, 17);
// console.log(anotherAnotherPart);

//concat usecase
const first ='amader';
const second ='city';
const fullString =first.concat(second).concat('abcd').concat('nishat');
// console.log(fullString);

//join usecase
const anotherWord =['alim', 'kolim', 'selim', 'jalim'];
const allJoined =anotherWord.join('');
console.log(allJoined);

//majhe ekto gap 
const anotherWord2 =['alim', 'kolim', 'selim', 'jalim'];
const allJoined2 =anotherWord.join(' ');
console.log(allJoined2);
//majhe ekto gap + coma
const anotherWord3 =['alim', 'kolim', 'selim', 'jalim'];
const allJoined3 =anotherWord.join(', ');
console.log(allJoined3);