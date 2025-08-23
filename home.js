document.getElementById('add-button')
    .addEventListener('click', function (e) {
        e.preventDefault();


        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const selectBank = document.getElementById('select-bank').value


        const accountNumber = document.getElementById('account-number').value

        const amount = parseInt(document.getElementById('amount').value)

        const addPin = document.getElementById('add-pin').value

        if (accountNumber.length < 11) {
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