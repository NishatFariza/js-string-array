const number =[1, 2, 3, 4, 5, 6, 7, 23];


//array slice usecase
// const numberSlied =number.slice(4, 11);
// console.log(numberSlied);

//array splice usecase
// const numberSplice =number.splice(4, 3);
// console.log(numberSplice);

//Array splice remove and add
const numberSplice2 =number.splice(4, 1, 'red', 'blue', 'yellow', 22, 34, 55);
console.log(numberSplice2);
console.log(number);