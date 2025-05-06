document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const pickButton = document.getElementById('pickButton');
    const clearButton = document.getElementById('clearButton');
    const totalNames = document.getElementById('totalNames');
    const randomNumberDisplay = document.getElementById('randomNumber');
    const pickedNameDisplay = document.getElementById('pickedName');

    pickButton.addEventListener('click', function() {
        const names = nameInput.value.split('\n').filter(name => name.trim() !== '');

        if (names.length === 0) {
            alert('Please enter names first!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const pickedName = names[randomIndex];

        totalNames.textContent = names.length;
        randomNumberDisplay.textContent = randomIndex + 1;
        pickedNameDisplay.textContent = pickedName;
    });

    clearButton.addEventListener('click', function() {
        nameInput.value = ''; // Clear names input
        totalNames.textContent = '0';
        randomNumberDisplay.textContent = '';
        pickedNameDisplay.textContent = '';
    });
});
