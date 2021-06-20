import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function MovieList() {
    // establish history used to push to different pages
    const history = useHistory();
    // establish dispatch use to call reducers in redux
    const dispatch = useDispatch();
    // estabish movies from useselector which uses variables stored in the store
    const movies = useSelector(store => store.movies);

    const AddMovie = () => {
        // navigate to add movie page
        history.push('AddMovie')
    }

    useEffect(() => {
        // on page load get all the movie data
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Button onClick={AddMovie}>Add Movie</Button>
            <br/>
            <br/>
            <section className="movies">
                <Grid container spacing={3}>
                    {/* map over movies array of movies data 
                    to render list of selectable movies */}
                {movies.map((movie) => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    );
                })}
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;