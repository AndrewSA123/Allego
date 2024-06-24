import './MovieCard.css';
import React, { ReactElement } from "react";
import { SearchResult } from "../ViewModels/Models";
import { Link } from 'react-router-dom';

interface Props {
    Movie: SearchResult,
    key
}

function MovieCard(props : Props) : ReactElement {
    const url = `/entity/${props.Movie.imdbID}`;
    const altText = `A picture of the movie ${props.Movie.Title}`
    return (
        <div className="Movie-Card-Container">
            <Link to={url}>
                <div className='Movie-Card'>
                    <img src={props.Movie.Poster} alt={altText} />
                    <p className='Movie-Title'>{props.Movie.Title}</p>
                </div>
            </Link>
        </div>
    )
}
 
export default MovieCard;