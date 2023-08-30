async function getUser (getUrl){
    try{
        const resp = await fetch(getUrl);
        const data = await resp.json();
        console.log(data);
    }

    catch(err){
        console.log(err);
    }
}