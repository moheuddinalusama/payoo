
document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length !=11){
    alert("Invalid Agent Number")
     return;
 }
    const cashoutAmount = getValueFromInput("cashout-amount");
    const currentBalance = getBalance()
    const newBalance = currentBalance - Number(cashoutAmount);

    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // const newBalance = Number(balance) - Number(cashoutAmount);

    console.log(newBalance)
if(newBalance < 0){
    alert("Invalid amount");
    return;
}
const pin = getValueFromInput("cashout-pin");
if(pin==="1234"){

 alert("cashout succesful");
 setBalance(newBalance)


  const history = document.getElementById("history-container")
    const newHistory = document.createElement("div")
    newHistory.innerHTML = `
     <div class="Transaction-card p-5 bg-base-100">
    cashout ${cashoutAmount} success to ${cashoutNumber} at ${new Date()}
    </div>
    `
history.append(newHistory)
//  document.getElementById("balance").innerText = newBalance;
 }else{
   alert("invalid pin");
    return;
}
});


// document.getElementById('cashout-btn').addEventListener('click', function () {
// const cashoutNumberInput = document.getElementById("cashout-number");
// const cashoutNumber = cashoutNumberInput.value;
// if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number")
//     return;
// }
// console.log(cashoutNumber)
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount)
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance) 
// const newBalance = Number(balance) - Number(cashoutAmount);
// if(newBalance < 0){
//     alert("Invalid amount");
//     return;
// }
// console.log("newBalance", newBalance)

// const cashoutPinInput = document.getElementById("cashout-pin")
// const pin = cashoutPinInput.value;
// if(pin==="1234"){
//     balanceElement.innerText = newBalance;
// alert("cashout succesful")
// }
// else{
//     alert("invalid pin");
//     return;
// }
// // console.log(pin)
// });