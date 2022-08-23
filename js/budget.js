let allPlayerExpenses = 1;

document.getElementById('calculate-per-player').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-player-input');
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInputValue = parseFloat(perPlayerInputString);
    const selectedPlayerAmount = selectedPlayer.length;
    allPlayerExpenses = perPlayerInputValue * selectedPlayerAmount;

    //set the multiplied value into player expenses field.
    const playerExpensesElement = document.getElementById('player-expenses-text');
    playerExpensesElement.innerText = allPlayerExpenses;
});

document.getElementById('calculate-total-button').addEventListener('click', function () {

    // grab the manager input field value
    const ManagerInputField = document.getElementById('manager-input');
    const ManagerInputString = ManagerInputField.value;
    const ManagerInputValue = parseFloat(ManagerInputString);

    // grab the coach input field value
    const coachInputField = document.getElementById('coach-input');
    const coachInputString = coachInputField.value;
    const coachInputValue = parseFloat(coachInputString);

    // addition of all values
    const totalValue = allPlayerExpenses + ManagerInputValue + coachInputValue;

    // set the total amount in the orange textfield
    const totalValueElement = document.getElementById('total-value');
    totalValueElement.innerText = totalValue;


});