import { types } from '../../actionTypes'

let initialState = {
    app_version: "",
    allFlags: "",
    femaleDummy: "",
    aboutUs: "",
    donateUs: "",
    mainPageBanners: "",
    isPopupUpdated: "",
    dateOfLastOpen: ""
}

export const generalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.APP_VERSION:
            return { ...state, app_version: action.app_version };
        case types.ALL_FLAGS:
            return { ...state, allFlags: action.allFlags };
        case types.FEMALE_DUMMY_IMAGE:
            return { ...state, femaleDummy: action.femaleDummy };
        case types.ABOUT_US:
            return { ...state, aboutUs: action.aboutUs };
        case types.DONATE_US:
            return { ...state, donateUs: action.donateUs };
        case types.MAIN_PAGE_BANNERS:
            return { ...state, mainPageBanners: action.mainPageBanners };
        case types.POPUP_UPDATED:
            return { ...state, isPopupUpdated: action.isPopupUpdated };
        case types.APP_OPENING_DATE:
            return { ...state, dateOfLastOpen: action.dateOfLastOpen };
        default:
            return state;
    }
}