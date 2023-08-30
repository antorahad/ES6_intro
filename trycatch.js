const checkAge = () => {
    const ageField = document.getElementById('age');

    const ageText = ageField.value;


    const errorTag = document.getElementById('error');

    

   
    try{
       const age = parseInt(ageText);

       if(isNaN(age)){
            throw 'Please enter a number';
       }

       else if(age < 18){
            throw 'You are underaged';
       }

       else{
            errorTag.innerHTML = '';            
       }
    }

    catch(err){

        errorTag.innerHTML = `Warning: ${err}`;
    }

    finally{
        console.log('All Done');
    }
}