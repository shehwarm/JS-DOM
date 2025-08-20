function savetoDb(data, success, failure)
{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    console.log(internetSpeed);
    if(internetSpeed > 4){
      success();
    } else{
      failure();
    }
    
}

savetoDb(
    "apna college",
     ()=>{
    console.log("your data was saved");
    savetoDb(
        "hello world",
         ()=>{
         console.log("your data 2 was saved");
         },
         ()=>{
        console.log("weak connection");
     }
    )
     },
     ()=>{
        console.log("weak connection");
     }
);

    

