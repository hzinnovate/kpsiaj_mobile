import { types } from '../../actionTypes'
import {
    auth,
    messaging,
    db
} from '../../../config'
import { setToast } from '../toastAction'
import * as RootNavigation from '../../../routing/rootNavigation'

export const getAppVersion = () => dispatch => {
    try {
        db.ref('app_version').on('value', e => {
            let app_version = e.val()
            if (app_version) {
                dispatch({ type: types.APP_VERSION, app_version })
            } else {
                dispatch({ type: types.APP_VERSION, app_version: "" })
            }
        })
    } catch (error) {
        dispatch({ type: types.APP_VERSION, app_version: "" })
    }
}
export const getAllFlags = () => dispatch => {
    try {
        db.ref('flags').on('value', e => {
            dispatch({ type: types.ALL_FLAGS, allFlags: e.val() })
        })
    } catch (error) {
        dispatch({ type: types.ALL_FLAGS, allFlags: "" })
    }
}
export const getFemaleDummyImageForDeathNews = () => dispatch => {
    try {
        db.ref('femaleImageForDeathNews').on('value', e => {
            dispatch({ type: types.FEMALE_DUMMY_IMAGE, femaleDummy: e.val() })
        })
    } catch (error) {
        dispatch({ type: types.FEMALE_DUMMY_IMAGE, femaleDummy: "" })
    }
}
export const getAboutUs = () => dispatch => {
    try {
        db.ref('aboutUs').on('value', e => {
            dispatch({ type: types.ABOUT_US, aboutUs: e.val() })
        })
    } catch (error) {
        dispatch({ type: types.ABOUT_US, aboutUs: "" })
    }
}
export const getDonateUs = () => dispatch => {
    try {
        db.ref('donateUs').on('value', e => {
            dispatch({ type: types.DONATE_US, donateUs: e.val() })
        })
    } catch (error) {
        dispatch({ type: types.DONATE_US, donateUs: "" })
    }
}
export const getMainPageBanners = () => dispatch => {
    try {
        db.ref('mainPageBanners').on('value', e => {
            let data = e.val()
            if (data) {
                dispatch({ type: types.MAIN_PAGE_BANNERS, mainPageBanners: e.val() })
            } else {
                dispatch({ type: types.MAIN_PAGE_BANNERS, mainPageBanners: "" })
            }
        })
    } catch (error) {
        dispatch({ type: types.MAIN_PAGE_BANNERS, mainPageBanners: "" })
    }
}
export const getLastUpdateTimeOfPopUpScreen = (timeStamp) => dispatch => {
    try {
        dispatch({ type: types.POPUP_UPDATED, isPopupUpdated: timeStamp })

    } catch (error) {
        dispatch({ type: types.POPUP_UPDATED, isPopupUpdated: "" })
    }
}
export const saveAppOpeningTime = (dateOfLastOpen) => dispatch => {
    try {
        dispatch({ type: types.APP_OPENING_DATE, dateOfLastOpen })

    } catch (error) {
        dispatch({ type: types.APP_OPENING_DATE, dateOfLastOpen: "" })
    }
}