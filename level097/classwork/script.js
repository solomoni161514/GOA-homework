let e1 = document.getElementById("1");
let e2 = document.getElementsByClassName("2");
let e3 = document.getElementsByTagName("button");

if (e1) {
	e1.style.color = "red";
	e1.style.backgroundColor = "blue";
	e1.style.fontSize = "20px";
	e1.style.fontFamily = "Arial";
}

for (let i = 0; i < e2.length; i++) {
	e2[i].style.color = "orange";
	e2[i].style.backgroundColor = "green";
	e2[i].style.fontSize = "50px";
	e2[i].style.fontFamily = "roboto";
}

for (let i = 0; i < e3.length; i++) {
	e3[i].style.color = "yellow";
	e3[i].style.backgroundColor = "red";
	e3[i].style.fontSize = "30px";
	e3[i].style.fontFamily = "cursive";
}