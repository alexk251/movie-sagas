import { useDispatch, useSelector } from 'react-redux';
import React,{ useState, useEffect }from 'react';
import Select from "@material-ui/core/Select";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

function AddMovie() {

    const history = useHistory();

    const dispatch = useDispatch();

    const genres = useSelector((store => store.genre))

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE' });
    }, []);

    let [newMovie, setMovie] = useState({
        id: 16,
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    const handleNameChange = (event) => {
        setMovie({...newMovie, title: event.target.value})
    }

    const handlePosterChange = (event) => {
        setMovie({...newMovie, poster: event.target.value})
    }

    const handleDescriptionChange = (event) => {
        setMovie({...newMovie, description: event.target.value})
    }
    
    const handleNewMovieGenre = (event) => {
        setMovie({...newMovie, genre_id: event.target.value})
    }

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
        <Card>
            <h2>Add New Movie</h2>
            <form onSubmit={addNewMovie}>
                
                <Input type='text' value={newMovie.title} placeholder='Movie Title' onChange={handleNameChange} />
                <Input type='text' value={newMovie.poster} placeholder='Movie Poster URL' onChange={handlePosterChange} />
                <Input type='text' value={newMovie.description} placeholder='Movie Description' onChange={handleDescriptionChange} />
                <br/>
                <FormControl>
                <InputLabel id="select-label">Genre</InputLabel>
                <Select 
                labelId="select-label"
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