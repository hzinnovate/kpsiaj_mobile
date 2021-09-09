import { types } from '../../actionTypes'

let initialState = {
    deathNews: [],
    eventNews: []
}

export const eventAndDeathNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DEATH_NEWS:
            return { ...state, deathNews: action.deathNews };
        case types.EVENT_NEWS:
            return { ...state, eventNews: action.eventNews };
        default:
            return state;
    }
}