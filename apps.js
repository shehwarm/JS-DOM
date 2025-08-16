let inp = document.querySelector("input");
let p = document.querySelector("p");


inp.addEventListener("change", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});