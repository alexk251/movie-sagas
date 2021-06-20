import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import '../MovieList/MovieList.css'

function MovieItem(props) {
    // establish dispatch to call reducers/watchers in saga and redux
    const dispatch = useDispatch();
    // establish history to push to other pages
    const history = useHistory();

    const goToDetails = () => {
        // get movie data
        dispatch({ type: 'FETCH_MOVIE', payload: props.movie.id });

        // get genre data
        dispatch({ type: 'FETCH_GENRES', payload: props.movie.id });
    

        history.push('/Details')
    }

    return (
        // render movie title and image in a card
        <Card className="Card" key={props.movie.id} >
        <h3 onClick={goToDetails}>{props.movie.title}</h3>
        <img onClick={goToDetails} src={props.movie.poster} alt={props.movie.title}/>
        </Card>
    );
    }

export default MovieItem;