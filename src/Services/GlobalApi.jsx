import axios from 'axios';

const fulUrl ='https://api.themoviedb.org/3/movie/550?api_key=e7d682aa875916eaa758042f1829bc75'
const  movie_base_url='https://api.themoviedb.org/3';
const api_key = 'e7d682aa875916eaa758042f1829bc75'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(movie_base_url + "/trending/all/day?api_key=" +api_key);
const getMovieByGenreId =(id) => axios.get(movieByGenreBaseURL + "&with_genres=" +id);

export default {
    getTrendingVideos,
    getMovieByGenreId
}