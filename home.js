// function to get number value from element
function getNumberValue(id) {
    const elementNumberValue = parseInt(document.getElementById(id).value)
    return elementNumberValue;
}

// function to get Number from inner text 
function getNumber(id) {
    const getNumberFromInnerText = parseInt(document.getElementById(id).innerText)
    return getNumberFromInnerText;
}

// function to get value from element 
function getValue(id) {
    const elementValue = document.getElementById(id).value
    return elementValue;
}

// function to set inner text (new available balance)
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance').innerText = value

    return availableBalanceElement;
}

//funtion for toggling 
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById(id).style.display = 'block'
}


//add money functionality
document.getElementById('add-button')
    .addEventListener('click', function (e) {
        e.preventDefault();


        const availableBalance = getNumber('available-balance')

        const selectBank = getValue('select-bank')


        const accountNumber = getValue('account-number')

        const amount = getNumberValue('amount')

        const addPin = getValue('add-pin')

        if (accountNumber.length !== 11) {
            alert('please provide your valid account number')
            return;
        }

        if (addPin.length !== 4) {
            alert('please enter your valid 4 digit pin number')
            return;
        }

        const totalNewAvailableBalance = availableBalance + amount

        setInnerText(totalNewAvailableBalance)
    })


// cash out functionality
document.getElementById('cash-out-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const availableBalance = getNumber('available-balance')

        const agentNumber = getValue('agent-number')

        const cashoutAmount = getNumberValue('cashout-amount')

        const cashoutPin = getValue('cash-out-pin')

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

        setInnerText(totalNewAvailableBalance)


    })


// transfer money functionality 
document.getElementById('transfer-money-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const availableBalance = getNumber('available-balance')

        const userNumber = getValue('user-number')

        const transferAmount = getNumberValue('transfer-amount')

        const transferMoneyPin = getValue('transfer-money-pin')

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

        setInnerText(totalNewAvailableBalance)

    })


// get bonus functionality 
document.getElementById('get-bonus-button')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const availableBalance = getNumber('available-balance')

        const copunCode = getValue('coupon-code')

        if (copunCode === 'payoo500') {
            const newBalance = availableBalance + 500
            document.getElementById('available-balance').innerText = newBalance;
        }

        else {
            alert('invalid copun code')
        }

    })


//pay bill functionality
document.getElementById('pay-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const availableBalance = getNumber('available-balance')

        const billerAccountNumber = getValue('biller-account-number')

        const payAmount = getNumberValue('pay-amount')

        const payPin = getValue('pay-pin')

        if (billerAccountNumber.length !== 11) {
            alert('please provide your valid account number')
            return;
        }

        if (payPin.length !== 4) {
            alert('please enter your valid 4 digit pin number')
            return;
        }




        const totalNewAvailableBalance = availableBalance - payAmount

        setInnerText(totalNewAvailableBalance)
    })



// toggling feature 


// add money card click handler
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        handleToggle('add-money-section')
    })


// cash out card click handler
document.getElementById('cash-out-card')
    .addEventListener('click', function () {
        handleToggle('cash-out-section')
    })


// transfer money card click handler 

document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        handleToggle('transfer-money-section')
    })


// get bonus card click handler

document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        handleToggle('get-bonus-section')
    })


// pay bill card click handler
document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        handleToggle('pay-bill-section')
    })