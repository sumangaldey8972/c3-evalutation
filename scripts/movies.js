// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amtdata = localStorage.getItem('amount');

document.getElementById('wallet').innerText = amtdata;
let id;
  async function searchfun() {
  try {
      let search = document.getElementById('search').value;
      const res = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=70929ee9f5c2ebe83d999708cae5c91d&language=en-US&page=1&include_adult=false&query=${search}`);
      const data = await res.json();
      console.log(data.results);
      display(data.results);

    } catch(err){
      console.log(err);
    }
  }

  let moviedata = JSON.parse(localStorage.getItem('movie')) || [];
  function display(data){
    document.getElementById('movies').innerHTML = null;
    data.forEach(function(el) {
      let div = document.createElement('div');
      
      let title = document.createElement('h3');
      title.innerText = el.title;

      let img = document.createElement('img');
      img.src = `https://image.tmdb.org/t/p/w300/${el.poster_path}`;

      let button = document.createElement('button');
      button.setAttribute ("class", "book_now");
      button.innerText = 'Book Now';
      button.addEventListener("click", function(){
        getmovies(el)
      })
      
      div.append(img, title, button)
      document.getElementById('movies').append(div);
    });
  }

  function getmovies(el){
    moviedata.push(el);
    localStorage.setItem('movie', JSON.stringify(moviedata));
    window.location.href = "checkout.html"
  }

  function deb(func, interval){
    if(id){
      clearTimeout(id)
    }
    id= setTimeout(function() {
      func();
    }, interval);
  }