import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_GENRE', fetchGenre);
}

function* fetchGenre(){
    try {
        const genre = yield axios.get(`/api/genre`);
        console.log('get all:', genre.data);
        yield put({ type: 'SET_GENRE', payload: genre.data });

    } catch (error){
        console.log('get all error',error);
    }
}

function* fetchGenres(action) {
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRE', payload: genres.data[0].genres_array });

    } catch (error){
        console.log('get all error',error);
    }
}

function* fetchMovie(action) {
    try {
        const movie = yield axios.get(`/api/movie/details/${action.payload}`);
        console.log('get all:', movie.data);
        yield put({ type: 'SET_MOVIE', payload: movie.data });

    } catch (error){
        console.log('get all error',error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movie for details selection request
const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genre = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
        genre,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
