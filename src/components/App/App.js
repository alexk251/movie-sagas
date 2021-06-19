import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/Details">
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="AddMovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
