import { useSelector, useDispatch } from 'react-redux';


function Details() {
    const movie = useSelector(store => store.details);
    const genres = useSelector(store => store.genres)
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