let head1 = document.createElement("h1");
head1.textContent = "Im a blue heading";
let body = document.querySelector("body");
body.appendChild(head1);
head1.classList.add("blue");