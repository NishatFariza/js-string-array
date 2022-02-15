//array sort number use case
const number= [8, 5, 2, 4, 9, 5, 1, 12, 23,14];
const sortNumber =number.sort();
const sortReverseNumber =number.sort().reverse();
console.log(sortNumber);

//array sort string usecase
const friends =['rohim', 'korim', 'josim', 'abir', 'badhon'];
const sortFriend =friends.sort();
const sortReverseFriend =friends.sort().reverse();
console.log(sortFriend);

//array reverse number usecase
const reverseNumber =number.reverse();
console.log(reverseNumber);

//array reverse string usecase
const reverseString =friends.reverse();
console.log(reverseString);

//array number sorting fun
const bigNumber =[23,56, 78, 67, 89, 34, 23, 82, 12, 45, 88,];
const sortBigNumbers =bigNumber.sort(function(a, b){
    return a-b;
});
console.log(sortBigNumbers);