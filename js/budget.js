let allPlayerExpenses = 1;

document.getElementById('calculate-per-player').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-player-input');
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInputValue = parseFloat(perPlayerInputString);
    // if (typeof perPlayerInputValue == 'NaN') {
    //     console.log('You need to give a number to calculate');
    // }
    const selectedPlayerAmount = selectedPlayer.length;
    allPlayerExpenses = perPlayerInputValue * selectedPlayerAmount;

    //set the multiplied value into player expenses field.
    const playerExpensesElement = document.getElementById('player-expenses-text');
    playerExpensesElement.innerText = allPlayerExpenses;
});

function getInputValue(input) {
    const inputField = document.getElementById(input);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

document.getElementById('calculate-total-button').addEventListener('click', function () {

    // grab the manager input field value
    const ManagerInputValue = getInputValue('manager-input');


    // grab the coach input field value
    const coachInputValue = getInputValue('coach-input');

    // addition of all values
    const totalValue = allPlayerExpenses + ManagerInputValue + coachInputValue;

    // set the total amount in the orange textfield
    const totalValueElement = document.getElementById('total-value');
    totalValueElement.innerText = totalValue;


});