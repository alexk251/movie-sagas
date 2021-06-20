import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {
    const history = useHistory();
    //selects movie reducer to obtain and store details
    const movie = useSelector(store => store.movie);
    //selects genres reducer to obtain and store genres of movie
    const genres = useSelector(store => store.genres);

    const goToHome = () => { 
        history.push('/')
    }
    return (
        <>
            <div key={movie[0]?.id} >
                <h3>{movie[0]?.title}</h3>
                <img src={movie[0]?.poster} alt={movie[0]?.title}/>
                <h2>Genre/Genres:</h2>
                {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                        </div>
                    );
                })}
                <p>{movie[0]?.description}</p>
                <button onClick={goToHome}>Back to List</button>
            </div>
        </>
    )
}

export default Details;