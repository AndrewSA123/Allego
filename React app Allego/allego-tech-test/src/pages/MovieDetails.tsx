import React, { ReactElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie, Rating } from "../ViewModels/Models";
import {getSpecificMovieData} from '../Services/MovieService.ts';
import './MovieDetails.css';
import '../Components/MovieCard.css';

function MovieDetails() : ReactElement{
    const params = useParams();
    const [movieData, setMovieData] = useState({} as Movie);
    const altText = `Picture about the movie ${movieData.Title}`;

    useEffect(() => {
        getSpecificMovieData(params.imdbID ?? "").then(x => {
            setMovieData(x);
            return x;
        });
    }, []);

    const setupRatings = () : ReactElement[] => {
        return movieData.Ratings?.map((rating : Rating, key) => {
            return <p className="Movie-Details" key={key}>{rating.Source}: {rating.Value}</p>
        })
    }

    return (
        <div>
            <Link to="/">
                <button className="Movie-Button" type="button">Back To Search</button>
            </Link>
            <div className="Movie-Details-Container">
                <img src={movieData.Poster} alt={altText} />
                <p>{movieData.Title}</p>
                <div className="Movie-Details">
                    <p>{movieData.Plot}</p>
                    <p>Actors: {movieData.Actors}</p>
                    <p>Director: {movieData.Director}</p>
                    <p>Writers: {movieData.Writer}</p>
                    <p>Genre: {movieData.Genre}</p>
                    <p>Release Date: {movieData.Released}</p>
                </div>
                <h3>Ratings</h3>
                <div className="Movie-Ratings">
                    { setupRatings() }
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;