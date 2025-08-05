
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', function(){
    const itemToAdd = itemInput.value.trim();
    if(itemToAdd != '')
    {
        const li = document.createElement('li');
        li.innerText = itemToAdd + ' ';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';

        deleteBtn.addEventListener('click', function(){
            li.remove();
        });
         li.appendChild(deleteBtn);
        itemList.appendChild(li);
       
        itemInput.value = '';
         itemInput.focus();    
    }
    else
    {
        alert('please enter an item');
    }
});