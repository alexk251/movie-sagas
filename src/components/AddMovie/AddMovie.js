import { useDispatch, useSelector } from 'react-redux';
import React,{ useState }from 'react';
import Select from "@material-ui/core/Select";

function AddMovie() {

    const dispatch = useDispatch();

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


        setMovie({id:newMovie.id +1, name: ''});
    }

    return (
        <div>
            <form onSubmit={addNewMovie}>
                
                <input type='text' value={newMovie.title} placeholder='Movie Title' onChange={handleNameChange} />
                <input type='text' value={newMovie.poster} placeholder='Movie Poster URL' onChange={handlePosterChange} />
                <input type='text' value={newMovie.description} placeholder='Movie Description' onChange={handleDescriptionChange} />
                <select onChange={handleNewMovieGenre}>
                    <option value >Select</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <input type='submit' value='Add New Movie' />
            </form>
        </div>
    );
}
export default AddMovie;