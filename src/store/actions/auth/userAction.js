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

export const signin = (payload) => async dispatch => {
  // start type for spining on ui
  dispatch({ type: types.AUTH_START })
  try {
    dispatch({ type: types.AUTH_SUCCESS })
  } catch (error) {
    dispatch({ type: types.AUTH_FAILD })
  }
}
