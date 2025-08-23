let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
      const config = { headers: {Accept: "applicaton/json"}};
      let res = await axios.get(url, config);
      
      console.log(res.data);  

    } catch(e){
        console.log("erorr--",e);
    }

}