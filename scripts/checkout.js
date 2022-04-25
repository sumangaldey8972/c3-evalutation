// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amtdata = localStorage.getItem('amount');

document.getElementById('wallet').innerText = amtdata;
function confirmfun() {
    let seats = document.getElementById('number_of_seats').value;

    let bill = 100 * seats;
    console.log(bill);

    if (+amtdata < bill){
      alert("Insufficient Balance!");
    }
    else{
      alert("Booking successfull!");
      amtdata = amtdata - bill;
      document.getElementById('wallet').innerText = amtdata;
      localStorage.setItem("amount", (amtdata));
    }
  }

  let get = JSON.parse(localStorage.getItem('movie'));
  
  get.map(function(el){
    document.getElementById('movie').innerHTML = null;
    let div = document.createElement('div');

    let title = document.createElement('h3');
    title.innerText = el.title;

    let img = document.createElement('img');
    img.src= `https://image.tmdb.org/t/p/w300/${el.poster_path}`;

    div.append(title, img);
    document.getElementById('movie').append(div)
  })