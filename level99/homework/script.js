let paragraph = document.createElement('p');
paragraph.textContent = 'This is a paragraph.';
document.body.appendChild(paragraph);

let subheading = document.createElement('h2');
subheading.textContent = 'Subheading';
document.body.appendChild(subheading);
subheading.textContent = 'Updated Subheading';

let divElement = document.createElement('div');
divElement.textContent = 'This is a div.';
document.body.appendChild(divElement);
document.body.removeChild(divElement);

let ulElement = document.createElement('ul');
let li1 = document.createElement('li');
li1.textContent = 'Item 1';
let li2 = document.createElement('li');
li2.textContent = 'Item 2';
let li3 = document.createElement('li');
li3.textContent = 'Item 3';
ulElement.appendChild(li1);
ulElement.appendChild(li2);
ulElement.appendChild(li3);
document.body.appendChild(ulElement);
console.log('First child of <ul>:', ulElement.firstElementChild.textContent);
console.log('Last child of <ul>:', ulElement.lastElementChild.textContent);

let insertedHeading = document.createElement('h3');
insertedHeading.textContent = 'Inserted Heading';
document.body.insertBefore(insertedHeading, document.body.firstChild);

let spanElement = document.createElement('span');
spanElement.textContent = 'This is a span.';
let containerDiv = document.getElementById('container');
if (containerDiv) {
    containerDiv.appendChild(spanElement);
    console.log('Parent of <span>:', spanElement.parentElement.id);
}