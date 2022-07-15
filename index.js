const form = document.forms['todoForm'];
const itemName = document.forms['todoForm']['item'];
const itemQuantity = document.forms['todoForm']['quantity'];
const submitBtn = document.querySelector('#submit');
const listTitle = document.getElementById('list');
const error = document.querySelector('small');
const itemList = [];
listTitle.innerHTML = 'No list available';

/*  Attach an event to the submit button to 
    prevent submission and as well to invoke addItemsToList function
*/
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addItemsToList();
});

function addItemsToList() {
  // Check if both field are empty indicate to the user
  if (itemName.value === '' || itemQuantity.value === '') {
    error.innerHTML = 'Both fields must be filled in';
    itemQuantity.style.border = '1px solid red';
    itemName.style.border = '1px solid red';

    // Set timeout to clear the error message, and the red line on the inputs
    setTimeout(() => {
      error.innerHTML = '';
      itemQuantity.style.border = 'none';
      itemName.style.border = 'none';

      if (itemName.value === '' && itemQuantity.value === '') {
        itemName.focus();
      } else if (itemName.value === '') {
        itemName.focus();
      } else {
        itemQuantity.focus();
      }
    }, 2000);
    return;
  }
  //   Add each element to the array
  itemList.push({ name: itemName.value, qty: itemQuantity.value });
  updateUIList({ name: itemName.value, qty: itemQuantity.value });
}

// Update the ui that the user sees
function updateUIList(list) {
  itemList.length > 0
    ? (listTitle.innerHTML = `My Lists of ${itemList.length} items`)
    : (listTitle.innerHTML = 'No list available');
  const displayedList = document.querySelector('ol');
  const text = document.createTextNode(`${list.name} - ${list.qty}`);
  const li = document.createElement('li');
  li.appendChild(text);
  displayedList.appendChild(li);
  form.reset();
  itemName.focus();
  console.log(itemList);
}
