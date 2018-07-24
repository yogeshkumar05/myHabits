export default function reducer(state = {
    users: [],
}, action) {

    switch (action.type) {
        case "FETCH_USERS_FULFILLED": {
            return Object.assign({}, state, { users: action.payload });
        }
        case "FETCH_USERS_REJECTED": {
            return Object.assign({}, state, { users: action.payload });
        }

    }
    return state;
}






