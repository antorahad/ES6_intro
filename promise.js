const getData = new Promise((resolve, reject) =>{
   const num = Math.random()*10;

   if(num < 5){
     resolve(566664);
   }
   else{
        reject('No data available')
   }
})

getData

.then(data => console.log(data))

.catch(err => console.log('ERR:', err));

