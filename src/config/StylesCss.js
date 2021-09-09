import { Dimensions } from 'react-native';
import {colors} from './AppConfigData';

const aboutUsStyles = {
    container: { backgroundColor: colors.secondryColor, flex: 1, padding: 5 },
    scroll: { backgroundColor: 'white', margin: 5, elevation: 7.5, borderRadius: 10, flex: 1, padding: 10 },
    txt: { paddingBottom: 25 }
}
const deathNewsStyles = {
    mainscreen: { flex: 1, padding: 10, backgroundColor: colors.secondryColor },
    txt: { textAlign: 'center', fontSize: 12, color: 'white' },
    listItm: { height: 50, backgroundColor: colors.primaryColor, padding: 5, margin: 10, borderRadius: 5, justifyContent: 'space-evenly', elevation: 7.5 },
    listTxt: { textAlign: 'center', fontSize: 16, color: colors.secondryColor , fontWeight: 'bold' },
    listTxtDate: { textAlign: 'center', fontSize: 10, color: colors.secondryColor, fontWeight: 'bold' },
}
const donateUsStyles = {
    container: { backgroundColor: colors.secondryColor, flex: 1, padding: 5 },
    scroll: { backgroundColor: 'white', margin: 5, elevation: 7.5, borderRadius: 10, flex: 1, padding: 10 },
}
const mainScreenStyles = {
    container: { flex: 1, backgroundColor: colors.secondryColor, paddingTop: 2 },
    mainscreen: { elevation: 5, backgroundColor: colors.primaryColor, marginTop: -35, flex: 1, borderRadius: 10, margin: 10, padding: 5, paddingTop: 40, paddingBottom: 10, marginBottom: 5 },
    footerTxt: { color: colors.secondryColor, fontSize: 12, textAlign: 'center', padding: 15},
    shadowImage: { width: Math.round(Dimensions.get('window').width) - 30, height: 140, borderRadius: 10, backgroundColor: colors.primaryColor, elevation: 7.5 }
}
const NewsEventsStyles = {
    mainscreen: { flex: 1, padding: 10, backgroundColor: colors.secondryColor },
    listItm: { height: 50, backgroundColor: colors.primaryColor, padding: 5, margin: 10, borderRadius: 5, justifyContent: 'space-evenly', elevation: 7.5 },
    listTxt: { textAlign: 'center', fontSize: 14, color: colors.secondryColor, fontWeight: 'bold' },
    list2ndTxt: { textAlign: 'right', fontSize: 8, color: colors.secondryColor, fontWeight: 'bold'},
}
const loaderStyles = {
    container: { position: 'absolute', zIndex: 100, justifyContent: 'center', backgroundColor: 'grey', top: 0, bottom: 0, right: 0, left: 0, opacity: 0.8 },
    loader: { zIndex: 110 }
}
const mainScreenbuttonsStyles = {
    buttonContainer: { width: '45%', justifyContent: 'center', alignItems: 'center' },
    button: {display: 'flex', flexDirection: 'column', backgroundColor: colors.secondryColor, height: 60, width: 90, marginTop: '4%', marginBottom: '4%', borderRadius: 7.5, elevation: 7.5 , alignItems: 'center', justifyContent: 'center'},
    buttonText: { fontSize: 12, color: colors.primaryColor, fontWeight: 'bold' }
}
const buttonsContainerStyles = {
    buttonsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingTop: 15, paddingBottom: 20, width: '100%', alignSelf: 'center' },
    donteButton: {display: 'flex', marginTop: 20, backgroundColor: colors.secondryColor, width: '90%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 7.5, elevation: 7.5 },
    donateButtonText: { fontSize: 15, fontWeight: "bold", color: colors.primaryColor }
}
const appVersionStyles = {
    container: { position: 'absolute', justifyContent: 'center', backgroundColor: colors.secondryColor, top: 0, bottom: 0, right: 0, left: 0 },
    text: { textAlign: 'center', color: colors.primaryColor, fontSize: 20 },
    btnContainer: { marginTop: 30, alignItems: 'center' },
    btn: { borderWidth: 1, borderColor: colors.primaryColor, width: 200, padding: 5, borderRadius: 20 },
    btnTxt: { textAlign: 'center', color: colors.primaryColor, fontSize: 20 }
}
const navigatorStyles = {
    headerStyle: { height: 40, backgroundColor: colors.primaryColor, elevation: 7.5 },
    headerRight: {
        container: { height: 30, width: 30, backgroundColor: 'black', marginRight: 15, elevation: 7.5, borderRadius: 20 },
        img: { height: 30, width: 30 }
    },
    headerLeft: {
        container: { flexDirection: 'row' },
        backBtn: { flexDirection: 'row', alignItems: 'center', paddingLeft: 15 },
        txt: { fontSize: 17, paddingLeft: 5, color: colors.secondryColor , fontWeight: 'bold'}
    }
}
const deathNewsDetailCompStyles = {
    container: { flex: 1, backgroundColor: colors.secondryColor },
    scroll: { margin: 10, backgroundColor: 'white', borderRadius: 10, flex: 1, padding: 10, elevation: 7.5 },
    btnContainer: { display: 'flex', flexDirection: 'row', position: 'relative', bottom: 0, right: 0, left: 0, backgroundColor: colors.primaryColor, elevation: 7.5 },
    btn: { flex: 1, height: 50, justifyContent: 'center', alignItems: 'center' },
    btnTxt: { color: colors.secondryColor, fontSize: 14},
    rTxtCont: { paddingTop: 10 },
    rtxt: { color: 'black', fontSize: 14 },
    rTxtBold: { color: "black", fontSize: 14, fontWeight: 'bold' },
    rImage: { height: Dimensions.get('window').width - 50, width: '100%', borderRadius: 5 }
}
const downloadAndConnectUsTabsStyles = {
    container: { height: '100%' },
    main: { backgroundColor: colors.primaryColor, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
    main2: { flex: 1, backgroundColor: 'white', elevation: 7.5 },
    text: { fontWeight: 'bold', color: colors.secondryColor},
    activeTab: { paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: colors.secondryColor },
    tab: { paddingTop: 10, paddingBottom: 10, flex: 1, alignItems: 'center' }
}
const feedBackStyles = {
    mainContainer: { flex: 1, marginTop: 50 },
    container: { paddingLeft: 20, paddingRight: 30 },
    textInputs: { borderWidth: 0.5, borderColor: 'grey', borderBottomWidth: 3, borderBottomColor: colors.secondryColor, height: 40, padding: 0, paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, marginBottom: 10, fontSize: 18 },
    textArea: { height: 250, textAlignVertical: 'top', borderWidth: 0.5, borderColor: 'grey', borderBottomWidth: 3, borderBottomColor: colors.secondryColor, padding: 0, paddingLeft: 10, backgroundColor: 'white', borderRadius: 5, marginBottom: 10, fontSize: 18 },
    submitBtn: { backgroundColor: colors.secondryColor, height: 40, width: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 10, elevation: 3 },
}
const popUpScreenStyles = {
    modalImageStyle: { height: '100%', width: '100%', borderRadius: 10 },
    modalCancleIcn: { fontSize: 30, elevation: 10, borderRadius: 20, textAlign: 'center', height: 30, width: 30, color: "white", position: 'absolute', top: -10, left: -10, backgroundColor: 'red', zIndex: 1 }

}
const logoLineStyles = {
    container: {flexDirection: "row",elevation: 10,},
    main: { flex: 1, alignItems: 'center' },
    logoimage: {width: 70, height: 70,},
    shadowImage: {backgroundColor: 'white',height: 70,width: 70,borderRadius: 40,elevation: 7.5}
}
const height = 140;
const width = Math.round(Dimensions.get('window').width) - 30;
const mainPageBannerStyles = {
    container: { alignItems: 'center', height, width },
    scroll: { width, height },
    pagingText: { fontSize: (width / 30), color: '#888', margin: 3 },
    pagingActiveText: { fontSize: (width / 30), color: '#fff', margin: 3 },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    image: { width, height, resizeMode: 'stretch', borderRadius: 10 },
}
const newsEventsDetailStyles = {
    mainscreen: { flex: 1, backgroundColor: colors.secondryColor },
    scroll: { margin: 10, flex: 1, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white', elevation: 7.5 },
    main:{backgroundColor: 'white', borderRadius: 10 },
    img: {height: Dimensions.get('window').width - 50,width: '100%', resizeMode: 'contain',borderRadius: 10},
    pdf: { height: Dimensions.get('window').width - 50, width: '100%', borderRadius: 10 },
    video: { height: Dimensions.get('window').width - 50, width: '100%', borderRadius: 10 },
    btnContainer: { display: 'flex', height: 50, backgroundColor: '#ECEAE4', flexDirection: 'row', position: 'relative', bottom: 0, right: 0, left: 0, elevation: 7.5 },
    btn: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    btnTxt: { color: colors.secondryColor, fontSize: 14},
}
export {
    aboutUsStyles,
    deathNewsStyles,
    donateUsStyles,
    mainScreenStyles,
    NewsEventsStyles,
    loaderStyles,
    mainScreenbuttonsStyles,
    appVersionStyles,
    navigatorStyles,
    buttonsContainerStyles,
    deathNewsDetailCompStyles,
    downloadAndConnectUsTabsStyles,
    feedBackStyles,
    popUpScreenStyles,
    logoLineStyles,
    mainPageBannerStyles,
    newsEventsDetailStyles
}




