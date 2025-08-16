let btns = document.querySelectorAll("button");

for(btn of btns) {
    

     btn.onclick = hello;

      function hello() {
        console.log("Hello, World!");
    }
    btn.onmouseover = function() {
        console.log("Mouse over button");
    }

}
