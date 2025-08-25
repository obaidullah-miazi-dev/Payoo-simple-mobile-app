const transactionData = [];

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



// function to toggle active btn
function activeBtn(id) {
    const activeBtn = document.getElementsByClassName('active-btn')

    for (const btn of activeBtn) {
        btn.classList.remove('border-[#0874F2]', 'bg-[#0875f20c]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874F2]', 'bg-[#0875f20c]')
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

        const data = {
            name: 'Add Money',
            date: new Date().toLocaleString()
        }

        transactionData.push(data)
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

        const data = {
            name: 'Cash Out',
            date: new Date().toLocaleString()
        }

        transactionData.push(data)


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

        const data = {
            name: 'Transfer Money',
            date: new Date().toLocaleString()
        }

        transactionData.push(data)

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

        const data = {
            name: 'Add Bonus',
            date: new Date().toLocaleString()
        }

        transactionData.push(data)

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

        const data = {
            name: 'Pay Bill',
            date: new Date().toLocaleString()
        }

        transactionData.push(data)
    })


// transaction history functionality
document.getElementById('transaction-card')
    .addEventListener('click', function () {
        const transactionContainer = document.getElementById('transaction-container')

        transactionContainer.innerHTML=''

        for (const data of transactionData) {
            const div = document.createElement("div")
            div.innerHTML =`<div class="bg-white p-3 rounded-xl flex justify-between items-center mb-3">
                <div class=" flex gap-5">
                    <div class="bg-[#F4F5F7] rounded-full p-3">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h3 class="font-semibold">${data.name}</h3>
                        <p class="text-gray-500">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>`;

            transactionContainer.appendChild(div)
        }
    })


// logout btn functionality
document.getElementById('logout-btn')
.addEventListener('click',function(){
    window.location.href="./index.html"
})


// toggling feature 


// add money card click handler
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        handleToggle('add-money-section')
        activeBtn('add-money-card')
    })


// cash out card click handler
document.getElementById('cash-out-card')
    .addEventListener('click', function () {
        handleToggle('cash-out-section')
        activeBtn('cash-out-card')
    })


// transfer money card click handler 

document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        handleToggle('transfer-money-section')
        activeBtn('transfer-money-card')
    })


// get bonus card click handler

document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        handleToggle('get-bonus-section')
        activeBtn('get-bonus-card')
    })


// pay bill card click handler
document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        handleToggle('pay-bill-section')
        activeBtn('pay-bill-card')
    })


// transaction card click handler
document.getElementById('transaction-card')
    .addEventListener('click', function () {
        handleToggle('transaction-section')
        activeBtn('transaction-card')
    })