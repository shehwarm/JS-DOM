

function savetoDb(data){
    return new Promise((success, failure)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        success("data was saved");
    } else{
        failure("weak connection");
    }
    });
}

savetoDb("apna college");