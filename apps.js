let btns = document.querySelectorAll("button");

for(btn of btns) {
    
     btn.onclick = sayHello;
     btn.onclick = sayName;


    function sayHello() {
        console.log("Hello, World!");
    }
     function sayName() {
        console.log("John Doe");
    }

};
