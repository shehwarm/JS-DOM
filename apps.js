let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
      let res = await axios.get(url);
      
      console.log(res);  

    } catch(e){
        console.log("erorr--",e);
    }

}