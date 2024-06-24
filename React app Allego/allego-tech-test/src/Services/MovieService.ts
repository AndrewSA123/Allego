import axios from 'axios';
import {Root, Movie} from '../ViewModels/Models.ts';


const base_url : string = "https://www.omdbapi.com/?";
var apiKey : string | undefined = process.env.REACT_APP_MOVIE_API_KEY;
console.log(process.env.REACT_APP_MOVIE_API_KEY);

export const fetchSearchResults = async (searchText : string, page : number) : Promise<Root> => {
    const response: Root = (await axios.get(`${base_url}s=${searchText}&page=${page}&apikey=${apiKey}`)).data

    return new Promise((res, rej) => {
        return res(response);
    });
}

export const getSpecificMovieData = async (imdbID : string) : Promise<Movie> => {
    const response: Movie = (await axios.get(`${base_url}i=${imdbID}&apikey=${apiKey}`)).data

    return new Promise((res, rej) => {
        return res(response);
    });
}