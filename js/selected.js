function playerSelect(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    selectedPlayer.push(playerName)
    console.log(selectedPlayer);
}

const selectedPlayer = [];
