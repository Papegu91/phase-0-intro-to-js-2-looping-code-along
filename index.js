function writeCards(name, event){
    let messageArr = [];
    for(let i=0; i<name.length; i++){
        let message=`Thank you, ${name[i]}, for the wonderful ${event} gift!`
        messageArr.push(message);
    }
    return messageArr;
}

function countDown(i){
    while(i>=0){
        console.log(i);
        i--;
    }
}
console.log(countDown(10));

