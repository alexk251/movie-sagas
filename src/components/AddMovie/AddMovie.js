import { useDispatch } from 'react-redux';
import React, {useState}from 'react';

const AddMovie = () => {

    const dispatch = useDispatch();

    let [newMovie, setMovie] = useState({
        id: 15,
        title: '',
        poster: '',
        description: ''
    })

    let [newMovieGenre, setNewmovieGenre] = useState({
        
    })

    const handleNameChange = (event) => {
        console.log('event happened');
        setPlant({...newMovie, title: event.target.value})
    }

    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie})
    }

    return
        <div>
            <form onSubmit={addNewMovie}>
                <input type='text' value={newMoive.title} onChange={handleNameChange} />
                <input type='submit' value='Add New Movie' />
            </form>
        </div>

export default AddMovie;