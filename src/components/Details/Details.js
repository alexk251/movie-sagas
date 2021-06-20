import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Details.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
        <Card className='Card'>
            <div key={movie[0]?.id} >
                <h3>{movie[0]?.title}</h3>
                <Card><img src={movie[0]?.poster} alt={movie[0]?.title}/></Card>
                <Card><div className='Genre'>
                <h2>Genre/Genres:</h2>
                {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                        </div>
                    );
                })}
                </div></Card>
                <Card><p className='Desc'>{movie[0]?.description}</p></Card>
                <Button onClick={goToHome}>Back to List</Button>
            </div>
        </Card>
    )
}

export default Details;