import { types } from '../../actionTypes'
import {
    auth,
    messaging,
    db,
    firebase
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const sendFeedBack = (obj) => async dispatch => {
    dispatch({ type: types.SEND_FEEDBACK_START })
    try {
        obj.timeStamp = firebase.database.ServerValue.TIMESTAMP
        let responce = await db.ref(`feedback/`).push(obj)
        db.ref(`feedback/${responce.key}`).update({ "uid": responce.key }).then(() => {
            dispatch({ type: types.SEND_FEEDBACK_SUCCESS })
            dispatch(setToast("success", "Thanks for writing back to us. Your feedback will be shared right away with relevant department. Stay connected with us."))
            RootNavigation.navigate("HomeContainer")
        })
    } catch (error) {
        dispatch({ type: types.SEND_FEEDBACK_FAILED })
        dispatch(setToast("error", "Please check your network connection & try again"))
    }
}