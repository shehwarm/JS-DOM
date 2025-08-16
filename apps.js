let btns = document.querySelectorAll("button");

for(btn of btns) {

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayGoodbye);

    function sayHello() {
        console.log("Hello");
    }
    function sayGoodbye() {
        console.log("Goodbye");
    }
}










