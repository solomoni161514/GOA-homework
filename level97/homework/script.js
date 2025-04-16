//inerHTML არის მეთოდი რომელიც გვაძლევს საშუალებას html-ის შინაარსი შევცვალოთ
//textContent არის მეთოდი რომელიც გვაძლევს საშუალებას მხოლოდ ტექსტი შევცვალოთ


let h1 = document.getElementById('1');
h1.innerHTML = 'Hello World! Hello World!';
let h2 = document.getElementsByClassName('2');
h2.innerHTML = 'Hello World! Hello World!';
let h3 = document.getElementsByTagName('h3');
h3.innerHTML = 'Hello World! Hello World!';