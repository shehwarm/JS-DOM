let btns = document.querySelectorAll("button");

for(btn of btns) {

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayGoodbye);
    btn.addEventListener("dbclick", function() {
        console.log("Double Clicked");
    });

    function sayHello() {
        console.log("Hello");
    }
    function sayGoodbye() {
        console.log("Goodbye");
    }
}










