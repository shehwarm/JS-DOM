async function greet(){
    throw "404 not found";
    return "hello";
}

greet()
.then((result)=>{
    console.log("success");
    console.log("result was ", result);
})
.catch((err)=>{
    console.log("promise rejected",err);
});

let demo = async () => {
    return 5;

};