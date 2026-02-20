// document.getElementById('login-btn')
// .addEventListener('click', function (){
//     const inputNumber = document.getElementById("input-number")
//     const number = inputNumber.value;
//     console.log(number)

//     const inputPIn = document.getElementById('input-pin')
//     const pin = inputPIn.value;
//     console.log(pin)
//     if(number=='01932569856' && pin=='1234'){
//         alert('লগইন হইচে')
//         window.location.assign("/home.html")
//     }
//     else{
//         alert('লগইন হইনাই')
//     }
// })



document.getElementById("cashout-btn").addEventListener('click', function (){
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length != 11){
        alert("Invled agent number")
        return;
    }
    console.log(cashoutNumber)


    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    
    console.log(cashoutAmount)

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance)

   const newBalance = Number(balance) - Number(cashoutAmount);
if(newBalance < 0){
        alert('invalid amount')
        return;
    }
    console.log("newBalance", newBalance)
   const cashoutPin = document.getElementById("cashout-pin");
   const pin = cashoutPin.value;
   if(pin==='1234'){
    alert("login sucses")
    balanceElement.innerText = newBalance;
   }else{
    alert("Invalid pin")
    return;
   }
 
//    co?nsole.log("newBalance", newBalance)
})