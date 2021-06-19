import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'

function MovieItem(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const goToDetails = () => {
        
        dispatch({ type: 'FETCH_MOVIE', payload: props.movie.id });
    
        // dispatch({ type: 'FETCH_GENRES', payload: movies.id });
    

        history.push('/Details')
    }

    return (
        <div key={props.movie.id} >
        <h3 onClick={goToDetails}>{props.movie.title}</h3>
        <img onClick={goToDetails} src={props.movie.poster} alt={props.movie.title}/>
        </div>
    );
    }

export default MovieItem;