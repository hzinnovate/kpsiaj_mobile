import { types } from '../../actionTypes';

// initeat State
let initialState = {
    user: {},
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.AUTH_START:
            return { ...state };
        default:
            return state;
    }
}
export default userReducer;