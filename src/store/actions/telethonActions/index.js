import { types } from '../../actionTypes'
import {
    auth,
    messaging,
    db,
    firebase
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const sendTelethonPledge = (obj) => async dispatch => {
    dispatch({ type: types.SEND_PLEDGE_START })
    try {
        obj.timeStamp = firebase.database.ServerValue.TIMESTAMP
        let responce = await db.ref(`telethon/pledges/`).push(obj)
        db.ref(`telethon/pledges/${responce.key}`).update({ "uid": responce.key }).then(() => {
            dispatch({ type: types.SEND_PLEDGE_SUCCESS })
            dispatch(setToast("success", 'Your pledge for KPSIAJ Telethon has been noted. Our representative will contact you soon. JazakAllah.'))
            RootNavigation.navigate("HomeContainer")
        })
    } catch (error) {
        dispatch({ type: types.SEND_PLEDGE_FAILED })
        dispatch(setToast("error", error.message || error.reason || error || "Network error"))
    }
}