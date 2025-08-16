let box = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(box);
box.classList.add("box");

let head1 = document.createElement("h1");
head1.textContent = "Im a div";
box.appendChild(head1);

let para1 = document.createElement("p");
para1.textContent = "hey Im a paragraph inside a div";
box.appendChild(para1);