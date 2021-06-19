import { useDispatch, useSelector } from 'react-redux';
import React,{ useState, useEffect }from 'react';
import Select from "@material-ui/core/Select";

function AddMovie() {

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
    }

    return (
        <div>
            <form onSubmit={addNewMovie}>
                
                <input type='text' value={newMovie.title} placeholder='Movie Title' onChange={handleNameChange} />
                <input type='text' value={newMovie.poster} placeholder='Movie Poster URL' onChange={handlePosterChange} />
                <input type='text' value={newMovie.description} placeholder='Movie Description' onChange={handleDescriptionChange} />
                <select onChange={handleNewMovieGenre}>
                    {genres.map((name) => (
                    <option key={name.id} value={name.id}>
                        {name.name}
                    </option>
                ))}
                </select>
                <input type='submit' value='Add New Movie' />
            </form>
        </div>
    );
}
export default AddMovie;