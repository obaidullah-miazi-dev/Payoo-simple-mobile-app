document.getElementById('add-button')
.addEventListener('click',function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    const accountNumber = document.getElementById('account-number').value

    const amount = parseInt(document.getElementById('amount').value)

    const addPin = document.getElementById('add-pin').value 

    const totalNewAvailableBalance = availableBalance+amount

    document.getElementById('available-balance').innerText= totalNewAvailableBalance;
})