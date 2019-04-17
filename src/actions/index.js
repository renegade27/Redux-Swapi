// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_START = 'FETCH_START';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetch = () => dispatch => {
    dispatch({
        type : FETCH_START,
        payload : true
    })
    const request = axios.get('https://swapi.co/api/people/');
    request.then(({data}) => {
        dispatch({
            type : FETCH_SUCCESS,
            payload : data.results
        });
    })
    .catch(err => {
        dispatch({
            type : FETCH_FAILURE,
            error : err
        })
    })
}
