const nameInput = document.getElementById('nameInput');
const liveName = document.getElementById('liveName');

nameInput.addEventListener('input', function() {
const userName = nameInput.value;
liveName.innerText = userName;
});