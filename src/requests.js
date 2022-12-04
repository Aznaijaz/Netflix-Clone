/*const API_KEY = "AIzaSyCFq0JMMSJiztWwhof8b7X4_SCy9j8VkWU";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  trending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanticMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
*/
const API_KEY = "0342bcb1b76aa09245a25a0afadff34e";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchNetflixOrignals : `/discover/tv?api_key=${API_KEY}&with_networks=213` ,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28` ,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35` ,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99` ,
}
export default requests;