document.getElementById('login-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = document.getElementById('mobile-number').value
    

    const pinNumber = document.getElementById('pin-number').value
    

    if(mobileNumber.length === 11 && !isNaN(mobileNumber) && pinNumber.length === 4 && !isNaN(pinNumber)){
       window.location.href="./home.html"
    }

    else{
        alert('invalid credentials')
    }

})