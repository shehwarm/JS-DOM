h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){

    setTimeout(()=> {
        h1.style.color = color;
        nextColorChange();
    },delay);
}

changeColor("red",1000, () => {
    changeColor("orange",1000,() => {
        changeColor("blue",1000);
    })
});
