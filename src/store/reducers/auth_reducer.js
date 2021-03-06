import * as actionTypes from '../actions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    name: null,
    loading: false
}


const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                name: action.name,
                error: null,
                loading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                name: null,
            }
        default:
            return state;
    }
}

export default auth_reducer;