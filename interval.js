/*let number = 0;

setInterval(function(){
    console.log(number++);
},1000);
*/

let number2 = 0 ;

const intervalId =  setInterval(() => {
    console.log(++number2);

    if(number2 === 15){
        clearInterval(intervalId);
    }
},1000);

