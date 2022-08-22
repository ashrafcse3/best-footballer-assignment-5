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
    selectedPlayer.push(playerName);

    // add the player name into the selected section
    // console.log();
    displaySelectedPlayer(selectedPlayer);
}

const selectedPlayer = [];
