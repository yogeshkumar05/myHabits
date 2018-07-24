import axios from 'axios';
import store from '../store'

export function fetchUsers(place) {
    axios.get(`http://localhost:8000/find/${place}`)
        .then((response) => {
            console.log(response);
            store.dispatch({ type: "FETCH_USERS_FULFILLED", payload: response.data })
        })
        .catch((err) => {
            console.log('action err');
            console.log(err);
            store.dispatch({ type: "FETCH_USERS_REJECTED", payload: err })
        })
}
