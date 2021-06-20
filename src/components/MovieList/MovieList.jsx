import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const AddMovie = () => {
        history.push('AddMovie')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Button onClick={AddMovie}>Add Movie</Button>
            <br/>
            <br/>
            <section className="movies">
                <Grid container spacing={3}>
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