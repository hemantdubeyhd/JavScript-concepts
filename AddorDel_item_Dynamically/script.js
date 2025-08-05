const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', function(){
    const itemToAdd = itemInput.value.trim();
    if(itemToAdd != '')
    {
        const li = document.createElement('li');
        li.innerText = itemToAdd;
        itemList.appendChild(li);
        itemInput.value = '';
    }
    else
    {
        alert('please enter an item');
    }
});