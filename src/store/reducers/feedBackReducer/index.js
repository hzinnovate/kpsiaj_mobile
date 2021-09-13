import { types } from '../../actionTypes'

let initialState = {
    isLoader: false,
    feedBackCatogeries: [
        'Telethon',
        'About App',
        'Fatimiyah Education Network',
        'Fatimiyah Hospital',
        'Fatimiyah Sports Complex',
        'Fatimiyah Community Center',
        'Shaheed Hameed Ali Bhojani Hall',
        'Education Donation Box',
        'Family Relations Committee',
        'Allama Haji Naji Library',
        'Transport',
        'KPSIAJ Front Desk',
        'Other',
    ]
}

export const feedBackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_FEEDBACK_START:
            return { ...state, isLoader: true };
        case types.SEND_FEEDBACK_SUCCESS:
            return { ...state, isLoader: false };
        case types.SEND_FEEDBACK_FAILED:
            return { ...state, isLoader: false };
        default:
            return state;
    }
}