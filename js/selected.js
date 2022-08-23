function displaySelectedPlayer(names) {
    const playerList = document.getElementById('selected-player-list');
    playerList.innerHTML = '';
    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        const li = document.createElement('li');
        li.innerHTML = `
        <span class="font-bold text-gray-500">${i + 1}.</span> 
        <span>${name}</span>
        `;
        playerList.appendChild(li);
    }
}

function playerSelect(element) {
    // fetch the player name in onclick
    const playerName = element.parentNode.parentNode.children[0].innerText;

    // give a warning after adding 5 people
    if (selectedPlayer.length === 5) {
        alert('You cannot add more than 5 people');
        return;
    }
    else {
        selectedPlayer.push(playerName);
        // disable the clicked button
        const clickedButton = element;
        clickedButton.setAttribute('disabled', '');
        // change the button background color and text color
        clickedButton.style.backgroundColor = 'grey';
        clickedButton.style.color = 'white';

        // add the player name into the selected section
        displaySelectedPlayer(selectedPlayer);
    }
}

const selectedPlayer = [];
