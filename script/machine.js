// console.log("machine added")
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}

function getBalance(){
const balanceElement = document.getElementById("balance");
const balance = balanceElement.innerText;
console.log("current balance",Number(balance))
return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}
function showOnely(id){
const addMoney = document.getElementById("add-money");
const cashout = document.getElementById("cashout");
const History = document.getElementById("History");
// console.log(`add maney- ${addMoney} cashout- ${cashout}`)
addMoney.classList.add("hidden")
cashout.classList.add("hidden")
History.classList.add("hidden")
const selectTed = document.getElementById(id);
selectTed.classList.remove("hidden");
}