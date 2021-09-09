import { types } from '../../actionTypes'
import {
    auth,
    messaging,
    db
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const getDeathNews = () => dispatch => {
    try {
        db.ref('deathNews').on('value', e => {
            let deathNews = []
            let data = e.val();
            if (data) {
                deathNews = Object.values(data)
            }
            dispatch({ type: types.DEATH_NEWS, deathNews: !!deathNews.length ? deathNews : [] })
        })
    } catch (error) {
        dispatch({ type: types.DEATH_NEWS, deathNews: [] })
    }
}

export const getEventNews = () => dispatch => {
    try {
        db.ref('eventNews').on('value', e => {
            let eventNews = []
            let data = e.val();
            if (data) {
                eventNews = Object.values(data)
            }
            dispatch({ type: types.EVENT_NEWS, eventNews: !!eventNews.length ? eventNews : [] })
        })
    } catch (error) {
        dispatch({ type: types.EVENT_NEWS, eventNews: [] })
    }
}