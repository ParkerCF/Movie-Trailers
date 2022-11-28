var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();

 
  searchApi(query);
  searchApi2(query);
}
getParams();



function searchApi(query){

var locQueryUrl = 'https://movie-database-alternative.p.rapidapi.com/?s=' + query + '&r=json&page=1';

console.log(locQueryUrl); 
var options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af3c4ac556msh4800601e994581cp141e52jsn02c4fb8865e3',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

fetch(locQueryUrl, options)
    .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayMovie(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 function displayMovie(data) {
    const movie = data.Search[0];
    const movieDiv = document.getElementById("Movie");
    const movieTitle = movie.Title;
    const heading = document.createElement("h1");
    heading.innerHTML = movieTitle;
    

    const movieLink = document.createElement("a");
    movieLink.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID) 
    

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.Poster

    movieLink.appendChild(moviePoster);
    movieDiv.appendChild(heading);  
    movieDiv.appendChild(movieLink);

  }   
}

function searchApi2(query) {

var locQueryUrl2 = 'https://ytube-videos.p.rapidapi.com/search-video?q='+ query + '%20trailer' + '%20video&max=1&lang=EN';

console.log(locQueryUrl2);
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af3c4ac556msh4800601e994581cp141e52jsn02c4fb8865e3',
		'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
	}
};

fetch(locQueryUrl2, options)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayYoutube(data)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayYoutube(data) {
  const youtube = data[0].channel;
  const youtubeDiv = document.getElementById("Movie");
  const heading = document.createElement("h2");
  heading.innerHTML = youtube;
  console.log(youtube)

  youtubeDiv.appendChild(heading);

  
  // const youtubeLink = document.createElement("a");
  // movieLink.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID) 
  

  // const moviePoster = document.createElement("img");
  // moviePoster.src = movie.Poster

  // movieLink.appendChild(moviePoster);
  // movieDiv.appendChild(heading);  
  // movieDiv.appendChild(movieLink);

}   
}