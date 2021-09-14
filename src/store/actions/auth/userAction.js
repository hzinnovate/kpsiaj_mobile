import { types } from '../../actionTypes'
import {
  auth,
  messaging,
  db,
  firebase
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const signout = () => async dispatch => {
  try {
    let uid = await auth().currentUser.uid;
    let resp = await db.ref(`users/${uid}`).off()
    let responce = await auth().signOut()
  } catch (error) {
    dispatch(removeSavedUser())
  }
}

export const signInWithPhoneNumber = (number, setConfirm) => async dispatch => {
  // start type for spining on ui
  dispatch({ type: types.AUTH_START })
  try {
    const confirmation = await auth().signInWithPhoneNumber(number);
    dispatch(setToast("info", "Verification code has been sent on your provided number"))
    if (setConfirm) {
      setConfirm(confirmation)
    }
    dispatch({ type: types.AUTH_SUCCESS })
  } catch (error) {
    dispatch(setToast("error", error.reason || error.message || "Network Error"))
    dispatch({ type: types.AUTH_FAILD })
  }
}
export const verifyNumber = (code, confirm, setConfirm) => async dispatch => {
  dispatch({ type: types.AUTH_VERIFY_START })
  try {
    let responce = await confirm.confirm(code);
    // let user = {
    //   uid: responce.user.uid,
    //   phoneNumber: responce.user.phoneNumber
    // }
    // dispatch(createUserInDB(user, setConfirm))
  } catch (error) {
    dispatch(setToast("error", error.reason || error.message || "Network Error"))
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

export const getCurrentUserData = uid => async dispatch => {
  try {
    db.ref(`users/${uid}`).on("value", resp => {
      let user = resp.val()
      if (user) {
        if (user.isActivated) {
          dispatch({ type: types.USER_LOGIN_SUCCESSFULLY, user: user })
        } else {
          dispatch(signout(user.uid))
        }
      } else {
        // dispatch(signout())
        console.log('Network Error')
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const onCreateUserOnFirebase = (obj, goBack) => async dispatch => {
  dispatch({ type: types.CREATE_USER_START })
  try {
    obj.timeStamp = firebase.database.ServerValue.TIMESTAMP
    let responce = await db.ref(`users/${obj.mainUserInfo.uid}/users`).push(obj)
    db.ref(`users/${obj.mainUserInfo.uid}/users/${responce.key}`).update({ "uid": responce.key }).then(() => {
      dispatch(setToast("success", "User added succesfully"))
      if (goBack) {
        goBack()
      }
      dispatch({ type: types.CREATE_USER_SUCCESS })
    })
  } catch (error) {
    dispatch({ type: types.CREATE_USER_FAILED })
    dispatch(setToast("error", "Network Error"))
  }
}
export const onUpdateUser = (obj, parentUid, childUid, goBack) => async dispatch => {
  dispatch({ type: types.UPDATE_USER_START })
  try {
    db.ref(`users/${parentUid}/users/${childUid}`).update(obj).then(() => {
      dispatch(setToast("success", "User updated succesfully"))
      if (goBack) {
        goBack()
      }
      dispatch({ type: types.UPDATE_USER_SUCCESS })
    })
  } catch (error) {
    dispatch({ type: types.UPDATE_USER_FAILED })
    dispatch(setToast("error", "Network Error"))
  }
}
export const onRemoveUser = (obj, goBack) => async dispatch => {
  dispatch({ type: types.DELETE_USER_START })
  try {
    let resp = await db.ref(`users/${obj.parentUid}/users/${obj.childUid}`).remove()
    dispatch(setToast("success", "User Removed"))
    if (goBack) {
      goBack()
    }
    dispatch({ type: types.DELETE_USER_SUCCESS })
  } catch (error) {
    dispatch({ type: types.DELETE_USER_FAILED })
    dispatch(setToast("error", "Network Error"))
  }
}