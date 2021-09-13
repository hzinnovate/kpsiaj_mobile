import { types } from '../../actionTypes'
import {
    auth,
    messaging,
    db,
    firebase
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const sendFeedBack = (obj, setFreshState) => dispatch => {
    dispatch({ type: types.SEND_FEEDBACK_START })
    try {
        db.ref('setTimeStampFromApp').set(firebase.database.ServerValue.TIMESTAMP).then(() => {
            db.ref('setTimeStampFromApp').once('value', (e) => {
                let timeStamp = e.val()
                obj.uid = timeStamp
                db.ref(`feedback/${timeStamp}`).set(obj).then(() => {
                    dispatch({ type: types.SEND_FEEDBACK_SUCCESS })
                    dispatch(setToast("success", "Thanks for writing back to us. Your feedback will be shared right away with relevant department. Stay connected with us."))
                    if (setFreshState) {
                        setFreshState()
                    }
                    RootNavigation.navigate("HomeContainer")
                })
            })
        })
    } catch (error) {
        dispatch({ type: types.SEND_FEEDBACK_FAILED })
        dispatch(setToast("error", "Please check your network connection & try again"))
    }
}