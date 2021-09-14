export {
    signInWithPhoneNumber,
    verifyNumber,
    signout,
    removeSavedUser,
    createUserInDB,
    getCurrentUserData,
    onCreateUserOnFirebase,
    onUpdateUser,
    onRemoveUser
} from './auth/userAction';
export {
    setToast,
    clearToast
} from './toastAction';
export {
    getAppVersion,
    getAllFlags,
    getFemaleDummyImageForDeathNews,
    getAboutUs,
    getDonateUs,
    getMainPageBanners,
    getLastUpdateTimeOfPopUpScreen,
    saveAppOpeningTime
} from './genralInfoAction';

export {
    getDeathNews,
    getEventNews
} from './eventAndDeathNewsActions';
export {
    sendFeedBack
} from './feedBackAction';

export {
    sendTelethonPledge
} from './telethonActions';