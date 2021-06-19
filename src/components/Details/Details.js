import { useSelector } from 'react-redux';


function Details() {
    //selects movie reducer to obtain and store details
    const movie = useSelector(store => store.details);
    //selects genres reducer to obtain and store genres of movie
    const genres = useSelector(store => store.genres);
    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
                <h2>Genre/Genres:</h2>
                {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                        </div>
                    );
                })}
                <p>{movie.description}</p>
            </div>
        </>
    )
}

export default Details;