let listContainer = document.querySelector('#list-container ul');

let newListItem = document.createElement('li');
newListItem.textContent = 'Orange';

listContainer.insertBefore(newListItem, listContainer.firstChild);

listContainer.removeChild(listContainer.lastElementChild);

console.log('First list item:', listContainer.firstElementChild.textContent);


let secondListItem = listContainer.children[1];
console.log('Parent of second list item:', secondListItem.parentElement.textContent);