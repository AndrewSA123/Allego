import './Movies.css';
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Root, SearchResult } from "../ViewModels/Models";
import { fetchSearchResults } from '../Services/MovieService.ts'
import MovieCard from "./MovieCard.tsx";

function Movies() : ReactElement{
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [movies, setMovies] = useState({} as Root);
    const [page, setPage] = useState(0);

    const renderMovieCard = () : ReactElement[] => {
        return movies.Search?.map((movie: SearchResult, key) => {
            return <MovieCard Movie={movie} key={key} />
        })
    }

    const changePage = (increment: boolean) => {
        setPage(increment ? page === Math.ceil(movies.totalResults / 10) ? Math.ceil(movies.totalResults / 10) : page + 1 : page === 1 ? 1 : page - 1);
    }

    const freshSearch = async (event) => {
        event.preventDefault();
        await handleSearch();
        setPage(1);
    }

    const changeToSpecificPage = (pageNumber : number) => {
        setPage(pageNumber);
    }

    useEffect(() => {
        handleSearch();
    }, [page])

    const handleSearch = async () =>{
        await fetchSearchResults(searchInputRef.current?.value ?? "", page).then(x => {
            setMovies(x);
            return x;
        });
    }

    return ( 
        <div className='Movies-Container'>
            <form onSubmit={async event => await freshSearch(event)}>
                <div className='form-group'>
                    <input type="text" className='Movie-Search' ref={searchInputRef} placeholder='Search for a movie or tv show' />
                </div>
            </form>
            <div className="Movie-Cards">
                { renderMovieCard() }
            </div>
            <button className='Movie-Button' onClick={() => changeToSpecificPage(1)}>{"<<"}</button>
            <button className='Movie-Button' onClick={() => changePage(false)}>{"<"}</button>
            {page}
            <button className='Movie-Button' onClick={() => changePage(true)}>{">"}</button>
            <button className='Movie-Button' onClick={() => changeToSpecificPage(Math.ceil(movies.totalResults / 10))}>{">>"}</button>
        </div>
     )
}
 
export default Movies;