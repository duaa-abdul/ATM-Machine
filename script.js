var balance = 20000;
var transaction = "";
var inputAmount = "";

function showBalance() {
  document.getElementById("showMoney").textContent = `Balance: $${balance}`;
}

function enterAmount(type) {
  transaction = type;
  document.getElementById("showMoney").textContent = `Enter amount: ${type}`;
  clearAllAmount();
}

function enterNumber(digit) {
  inputAmount += digit;
  document.getElementById("amount").value = inputAmount;
}

function clearAllAmount() {
  inputAmount = "";
  document.getElementById("amount").value = "";
}

function confirmTransaction() {
  var amount = parseFloat(inputAmount);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("showMoney").textContent = "Invalid amount.";
    return;
  }
  if (transaction === "withdraw") {
    if (amount > balance) {
      document.getElementById("showMoney").textContent =
        "Insufficient funds.";
    } else {
      balance -= amount;
      document.getElementById(
        "showMoney"
      ).textContent = `Withdrew $${amount}. New balance: $${balance}`;
    }
  } else if (transaction === "deposit") {
    balance += amount;
    document.getElementById(
      "showMoney"
    ).textContent = `Deposited $${amount}. New balance: $${balance}`;
  }
  clearAllAmount();
}