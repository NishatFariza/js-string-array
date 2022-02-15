function addNumber(num1, num2){
    // console.log(arguments[3]);
    let result =0;
    for(const num of arguments){
        result = result +num;
    }
    return result;
}
const sum =addNumber(23, 12, 32, 43, 44, 54, 65, 76, 88);
// console.log(sum);

//function argument string
function addFriend(fristName, lastName){
    const fullName =fristName + ' '+lastName;
    return fullName;
}
const name =addFriend('Nishat', 'fariza', 'hanif', 'songket');
console.log(name);
//function argument string
function addFriend(fristName, lastName){
    let fullName2 ='';
   for(const part of arguments){
       fullName2 = fullName2 +part +' ';
   }
    return fullName2;
}
const newName =addFriend('Nishat', 'fariza', 'hanif', 'songket');
console.log(newName);