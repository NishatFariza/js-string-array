//Array.isArray() usecase;
function megaFriend(friends){
    if(Array.isArray(friends) ==false){
        return 'Please provied an array of string';
    }

    let mega = friends[0];
    for (const friend of friends){
        if(friend.length > mega.length){
            mega =friend;
        }
    }
    return mega;
}
const friends =['Kotop', 'Lion', 'shamol', 'sabirr'];
const myBigBuddy =megaFriend(12345);
// console.log(myBigBuddy);


//array indexOf usecase
if(friends.indexOf('Lion') != -1){
    // console.log('lion exists');
}

//Array includes usecase
if(friends.includes('Lion')){
    console.log('lion is avaiable')
}
//Array concat usecase
const first =[1, 3, 4, 6, 7];
const second =[9, 10, 23, 34];
const combiend =first.concat(second);
console.log(combiend);