import { types } from '../../actionTypes';

// initeat State
let initialState = {
    user: {},
    isUserLogin: false,
    isLoading: false
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.AUTH_START:
            return { ...state, isLoading: true };
        case types.AUTH_SUCCESS:
            return { ...state, isLoading: false };
        case types.AUTH_FAILD:
            return { ...state, isLoading: false, isUserLogin: false };

        case types.AUTH_VERIFY_START:
            return { ...state, isLoading: true };
        case types.AUTH_VERIFY_FAILD:
            return { ...state, isLoading: false, isUserLogin: false };

        case types.USER_LOGIN_SUCCESSFULLY:
            return { ...state, isLoading: false, user: action.user, isUserLogin: true };
        case types.USER_LOGIN_FAILED:
            return { ...state, isLoading: false, user: {}, isUserLogin: false };


        case types.USER_DATA_REMOVED:
            return { ...state, user: {}, isLoading: false, isUserLogin: false };
        case types.CREATE_USER_START:
            return { ...state, isLoading: true };
        case types.CREATE_USER_SUCCESS:
            return { ...state, isLoading: false };
        case types.CREATE_USER_FAILED:
            return { ...state, isLoading: false };
        case types.UPDATE_USER_START:
            return { ...state, isLoading: true };
        case types.UPDATE_USER_SUCCESS:
            return { ...state, isLoading: false };
        case types.UPDATE_USER_FAILED:
            return { ...state, isLoading: false };
        case types.DELETE_USER_START:
            return { ...state, isLoading: true };
        case types.DELETE_USER_SUCCESS:
            return { ...state, isLoading: false };
        case types.DELETE_USER_FAILED:
            return { ...state, isLoading: false };

        default:
            return state;
    }
}
export default userReducer;