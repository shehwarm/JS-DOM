


function savetoDb(data){
    return new Promise((resolve, reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        resolve("data was saved");
    } else{
        reject("weak connection");
    }
    });
}



savetoDb("apna college")
     .then(() =>{
        console.log("data 1.promise resolved");
        savetoDb("hello world")
        .then(()=>{
           console.log("data 2.promise resolved");
        })
        .catch(()=>{
        console.log("promise rejected");
     });
     })
     .catch(()=>{
        console.log("promise rejected");
     });

