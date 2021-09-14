import { types } from '../../actionTypes';

// initeat State
let initialState = {
    isLoading: false,
};

export function quizReducer(state = initialState, action) {
    switch (action.type) {
        // case types.SEND_PLEDGE_START:
        //     return { ...state, isLoading: true };
        // case types.SEND_PLEDGE_SUCCESS:
        //     return { ...state, isLoading: false };
        // case types.SEND_PLEDGE_FAILED:
        //     return { ...state, isLoading: false };
        default:
            return state;
    }
}