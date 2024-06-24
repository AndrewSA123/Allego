import axios from 'axios';
import {Root, Movie} from '../ViewModels/Models.ts';

const base_url : string = "https://www.omdbapi.com/?";

export const fetchSearchResults = async (searchText : string, page : number) : Promise<Root> => {
    const response: Root = (await axios.get(`${base_url}s=${searchText}&page=${page}&apikey=5f41a62d`)).data

    return new Promise((res, rej) => {
        return res(response);
    });
}

export const getSpecificMovieData = async (imdbID : string) : Promise<Movie> => {
    const response: Movie = (await axios.get(`${base_url}i=${imdbID}&apikey=5f41a62d`)).data

    return new Promise((res, rej) => {
        return res(response);
    });
}