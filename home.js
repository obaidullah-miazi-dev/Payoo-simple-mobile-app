//add money functionality
document.getElementById('add-button')
    .addEventListener('click', function (e) {
        e.preventDefault();


        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const selectBank = document.getElementById('select-bank').value


        const accountNumber = document.getElementById('account-number').value

        const amount = parseInt(document.getElementById('amount').value)

        const addPin = document.getElementById('add-pin').value

        if (accountNumber.length !== 11) {
            alert('please provide your valid account number')
            return;
        }

        if (addPin.length !== 4) {
            alert('please enter your valid 4 digit pin number')
            return;
        }

        const totalNewAvailableBalance = availableBalance + amount

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    })


// cash out functionality
document.getElementById('cash-out-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const agentNumber = document.getElementById('agent-number').value

        const cashoutAmount = parseInt(document.getElementById('cashout-amount').value)

        const cashoutPin = document.getElementById('cash-out-pin').value

        if (agentNumber.length !== 11) {
            alert('please provide your 11 digit agent number')
            return;
        }

        if (cashoutPin.length !== 4) {
            alert('please provide your valid 4 digit pin')
            return;
        }

        if (cashoutAmount > availableBalance) {
            alert('Insufficient balance! You cannot cashout more than your available balance.');
            return;
        }

        const totalNewAvailableBalance = availableBalance - cashoutAmount;

        document.getElementById('available-balance').innerText = totalNewAvailableBalance


    })


// transfer money functionality 
document.getElementById('transfer-money-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const userNumber = document.getElementById('user-number').value

        const transferAmount = parseInt(document.getElementById('transfer-amount').value)

        const transferMoneyPin = document.getElementById('transfer-money-pin').value

        if (userNumber.length !== 11) {
            alert('please provide your 11 digit user number')
            return;
        }

        if (transferMoneyPin.length !== 4) {
            alert('please provide your valid 4 digit pin')
            return;
        }

        if (transferAmount > availableBalance) {
            alert('Insufficient balance! You cannot transfer more than your available balance.');
            return;
        }

        const totalNewAvailableBalance = availableBalance - transferAmount

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;

    })


// get bonus functionality 
document.getElementById('get-bonus-button')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const copunCode = document.getElementById('coupon-code').value

        if (copunCode === 'payoo500') {
            const newBalance = availableBalance - 500
            document.getElementById('available-balance').innerText = newBalance;
        }

        else {
            alert('invalid copun code')
        }

    })





// toggling feature 


// add money card click handler
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        document.getElementById('cash-out-section').style.display = 'none';
        document.getElementById('transfer-money-section').style.display = 'none';
        document.getElementById('get-bonus-section').style.display = 'none';
        document.getElementById('add-money-section').style.display = 'block';
    })


// cash out card click handler
document.getElementById('cash-out-card')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('transfer-money-section').style.display = 'none';
        document.getElementById('get-bonus-section').style.display = 'none';
        document.getElementById('cash-out-section').style.display = 'block';
    })


// transfer money card click handler 

document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cash-out-section').style.display = 'none';
        document.getElementById('get-bonus-section').style.display = 'none';
        document.getElementById('transfer-money-section').style.display = 'block';
    })


// get bonus card click handler

document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cash-out-section').style.display = 'none';
        document.getElementById('transfer-money-section').style.display = 'none';
        document.getElementById('get-bonus-section').style.display = 'block';
    })