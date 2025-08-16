let inp = document.querySelector('input');


inp.addEventListener("keydown", function(event) {
    console.log(event.code);
    if (event.code === "ArrowUp") {
        console.log("You pressed the up arrow key");
    } else if (event.code === "ArrowDown") {
        console.log("You pressed the down arrow key");
    } else if (event.code === "ArrowLeft") {    
        console.log("You pressed the left arrow key");
    } else if (event.code === "ArrowRight") {
        console.log("You pressed the right arrow key");
    }
});

 