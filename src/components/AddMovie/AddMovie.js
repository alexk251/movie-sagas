import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState}from 'react';
import Select from "@material-ui/core/Select";

function AddMovie() {

    const dispatch = useDispatch();
    const genres = useSelector((store => store.genre))

    let [newMovie, setMovie] = useState({
        id: 15,
        title: '',
        poster: '',
        description: ''
    })

    let [newMovieGenre, setNewMovieGenre] = useState({
        id: '',
        name: ''
    })

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE' });
    }, []);

    const handleNameChange = (event) => {
        setMovie({...newMovie, title: event.target.value})
    }

    const handlePosterChange = (event) => {
        setMovie({...newMovie, poster: event.target.value})
    }

    const handleDescriptionChange = (event) => {
        setMovie({...newMovie, description: event.target.value})
    }

    const setNewmovieGenre = (event) => {
        setNewMovieGenre({...newMovieGenre, name: event.target.value})
    }

    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie});
        dispatch({ type: 'ADD_GENRE', payload: newMovieGenre});


        setMovie({id:newPlant.id +1, name: ''});
    }

    return (
        <div>
            <form onSubmit={addNewMovie}>
                
                <input type='text' value={newMovie.title} placeholder='Movie Title' onChange={handleNameChange} />
                <input type='text' value={newMovie.poster} placeholder='Movie Poster URL' onChange={handlePosterChange} />
                <input type='text' value={newMovie.description} placeholder='Movie Description' onChange={handleDescriptionChange} />
                <Select id={newMovieGenre.id} value= {newMovieGenre.name} onChange={setNewmovieGenre}>
                    {genres.map(name => (
                        <div key={name.name} value={name.name}>
                            {name.name}
                        </div>
                    ))}
                </Select>
                <input type='submit' value='Add New Movie' />
            </form>
        </div>
    );
}
export default AddMovie;