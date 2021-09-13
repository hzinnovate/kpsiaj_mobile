import { types } from '../../actionTypes'
import {
  auth,
  messaging,
  db
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const signout = header => async dispatch => {
  // User SignOut from firebase then ui
  try {
    dispatch({ type: types.SING_OUT })
  } catch (error) {
    dispatch({ type: types.SING_OUT })
  }
}

export const signInWithPhoneNumber = (number, setConfirm) => async dispatch => {
  // start type for spining on ui
  dispatch({ type: types.AUTH_START })
  try {
    const confirmation = await auth().signInWithPhoneNumber(number);
    dispatch(setToast("info", "Verification code has been sent on your provided number"))
    if (setConfirm) {
      console.log('hjvhjbkjnkln', confirmation)
      setConfirm(confirmation)
    }
    dispatch({ type: types.AUTH_SUCCESS })
  } catch (error) {
    console.log(error)
    // dispatch(setToast("error", "Verification code has been sent on your provided number"))
    dispatch({ type: types.AUTH_FAILD })
  }
}
export const verifyNumber = (code, confirm, setConfirm) => async dispatch => {
  console.log(code)
  dispatch({ type: types.AUTH_VERIFY_START })
  try {
    let responce = await confirm.confirm(code);
    // let user = {
    //   uid: responce.user.uid,
    //   phoneNumber: responce.user.phoneNumber
    // }
    // dispatch(createUserInDB(user, setConfirm))
  } catch (error) {
    dispatch(setToast("error", "Invalid code"))
    dispatch({ type: types.AUTH_VERIFY_FAILD })
  }
}

export const createUserInDB = (user) => async dispatch => {
  try {
    db.ref(`users/${user.uid}`).once("value").then((resp) => {
      let dta = resp.val()
      if (dta) {
        if (!dta.isActivated) {
          auth().signOut()
        }
        if (!user.users) {
          user.users = {}
        }
        dispatch({ type: types.USER_LOGIN_SUCCESSFULLY, user: dta })
      } else {
        user.users = {};
        user.isActivated = true;
        db.ref(`users/${user.uid}`).set(user).then(() => {
          dispatch({ type: types.USER_LOGIN_SUCCESSFULLY, user })
        }).catch((error) => {
          throw error
        })
      }
    })
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILED })
    console.log(error)
  }
}

export const removeSavedUser = () => async dispatch => {
  try {
    dispatch({ type: types.USER_DATA_REMOVED })
  } catch (error) {
    console.log(error)
  }
}