var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();

 
  searchApi(query);
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

// function start() {
//   // Initializes the client with the API key and the Translate API.
//   gapi.client.init({
//     'apiKey': 'AIzaSyCOYLbVBlcpAeEP3EhpHdBImhg3srwnObE',
//     'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      
//   }).then(onClientInitSucess).catch(() => { console.log("failure") })
// }
// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//   gapi.client.setApiKey('AIzaSyCOYLbVBlcpAeEP3EhpHdBImhg3srwnObE');
// }

// // Called when the search button is clicked in the html code

// function onClientInitSucess() {
//   searchBtn.addEventListener('click', search)
// }

// var searchBtn = document.querySelector('btn')
// gapi.load('client', start)





// function search() {
//     var query = document.getElementById('search-input').value;
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//     part: 'snippet',
//         q:query
//     });
//     // Send the request to the API server, call the onSearchResponse function when the data is returned
//     request.execute(onSearchResponse);
// }
// // Triggered by this line: request.execute(onSearchResponse);
// function onSearchResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('movie-results').innerHTML = responseString;
// }





