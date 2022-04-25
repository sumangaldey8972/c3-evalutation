// Store the wallet amount to your local storage with key "amount"
let amtdata = localStorage.getItem('amount') || 0;

document.getElementById('wallet').innerText = amtdata;
function Addfun() {
  let amt = document.getElementById("amount").value;

  amtdata = +amtdata + +amt;

  localStorage.setItem("amount", (amtdata))
  document.getElementById('wallet').innerText = amtdata;

}

