import { useDispatch, useSelector } from 'react-redux';
import React,{ useState, useEffect }from 'react';
import Select from "@material-ui/core/Select";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import './AddMovie.css'

function AddMovie() {
    // establish history to push to other pages
    const history = useHistory();
    // establish dispatch to call watchers and reducers in redux/saga in index.js
    const dispatch = useDispatch();
    // call useselector to store genres locally from reducer
    const genres = useSelector((store => store.genre))

    useEffect(() => {
        // fetch genres from reducer on page load
        dispatch({ type: 'FETCH_GENRE' });
    }, []);

    // use state to store a local state that stores new movie data in an object
    let [newMovie, setMovie] = useState({
        id: 16,
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

        // records changes of movie title input
    const handleNameChange = (event) => {
        setMovie({...newMovie, title: event.target.value})
    }
        // records changes of movie poster input
    const handlePosterChange = (event) => {
        setMovie({...newMovie, poster: event.target.value})
    }
        // records changes of movie description input
    const handleDescriptionChange = (event) => {
        setMovie({...newMovie, description: event.target.value})
    }
        // records changes of movie genre input
    const handleNewMovieGenre = (event) => {
        setMovie({...newMovie, genre_id: event.target.value})
    }
        // dispatches new movie object to watcher which adds new movie to the database
        // then returns to home page
    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie});


        setMovie({id:newMovie.id +1, title: '',
        poster: '',
        description: '',
        genre_id: ''});

        history.push('/')
    }

    const goToHome = () => { 
        history.push('/')
    }
    return (
        // renders inputs for new movie in a card
        <Card>
            <h2>Add New Movie</h2>
            <form onSubmit={addNewMovie}>
                
                <Input required type='text' value={newMovie.title} placeholder='Movie Title' onChange={handleNameChange} />
                <Input required type='text' value={newMovie.poster} placeholder='Movie Poster URL' onChange={handlePosterChange} />
                <Input required type='text' value={newMovie.description} placeholder='Movie Description' onChange={handleDescriptionChange} />
                <br/>
                <FormControl>
                <InputLabel id="select-label">Genre</InputLabel>
                <Select 
                labelId="select-label"
                defaultValue=''
                required
                onChange={handleNewMovieGenre}>
                    {genres.map((name) => (
                    <MenuItem key={name.id} value={name.id}>
                        {name.name}
                    </MenuItem>
                ))}
                </Select>
                </FormControl>
                <br/>
                <Input type='submit' value='Save' />
                <Button onClick={goToHome}>Cancel</Button>
            </form>
        </Card>
    );
}
export default AddMovie;