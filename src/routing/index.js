import React, { Component } from 'react';
// import { View, StatusBar } from 'react-native';
// import { auth } from '../config';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './rootNavigation';
import { auth } from '../config';
import {
    signout,
    clearToast,
    getAppVersion,
    getAllFlags,
    getFemaleDummyImageForDeathNews,
    getAboutUs,
    getDonateUs,
    getMainPageBanners,
    getLastUpdateTimeOfPopUpScreen,
    saveAppOpeningTime,
    getDeathNews,
    getEventNews,
    createUserInDB,
    removeSavedUser,
    getCurrentUserData
} from '../store/actions';
import { Toast } from '../universalComponents';
import {
    screens,
    initialRouteName
} from './screens';

const Stack = createStackNavigator();
// const linking = {
//     prefixes: ['https://kpsiaj.com'],
// };
class AppNavigatior extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneTimeApis: {
                isHittingOneTimeApis: false,
                isHittingAuthenticApis: false
            }
        }
    }
    async componentDidMount() {
        // auth().signOut()
        auth().onAuthStateChanged(async userAuth => {
            // console.log('login=> nabigator', userAuth)
            // try {
            if (userAuth) {
                let user = {
                    uid: userAuth.uid,
                    phoneNumber: userAuth.phoneNumber
                }
                this.props.createUserInDB(user)
            } else {
                this.props.removeSavedUser()
            }
            // } catch (error) {
            //     console.log('error from on auth state change', error)
            // }
        });


    }
    static getDerivedStateFromProps(props, state) {
        let obj = state.oneTimeApis
        let {
            getAppVersion,
            getAllFlags,
            getFemaleDummyImageForDeathNews,
            getAboutUs,
            getDonateUs,
            getMainPageBanners,
            getLastUpdateTimeOfPopUpScreen,
            saveAppOpeningTime,
            getDeathNews,
            getEventNews,
            user,
            getCurrentUserData,
            isUserLogin
        } = props;
        try {
            if (!obj.isHittingOneTimeApis) {
                getAppVersion()
                getAllFlags()
                getFemaleDummyImageForDeathNews()
                getAboutUs()
                getDonateUs()
                getMainPageBanners()
                getLastUpdateTimeOfPopUpScreen()
                saveAppOpeningTime()
                getDeathNews()
                getEventNews()
                obj.isHittingOneTimeApis = true
            }
            if (isUserLogin && !obj.isHittingAuthenticApis) {
                console.log('done')
                getCurrentUserData(user.uid)
                obj.isHittingAuthenticApis = true
            }
        } catch (error) {

        }
        return obj, () => { isReadyRef.current = false };
    }

    render() {
        return (
            <NavigationContainer ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true
                }}
            >
                {/* <StatusBar animated={true} barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} /> */}
                {this.props.isToastShowing && <Toast {...this.props.toastConfig} isToastShowing={this.props.isToastShowing} clearToast={() => this.props.clearToast()} />}
                <Stack.Navigator initialRouteName={initialRouteName}>
                    {!!screens.length && screens.map(((item, index) => {
                        return (
                            <Stack.Screen key={index} name={item.name} component={item.component} options={{ headerShown: false }} />
                        )
                    }))}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (props) => {
    const { auth, toast, news, general } = props;
    return {
        user: auth.user,
        isUserLogin: auth.isUserLogin,
        toastConfig: toast.config,
        isToastShowing: toast.isToastShowing
    };
};

export default connect(mapStateToProps,
    {
        signout,
        clearToast,
        getAppVersion,
        getAllFlags,
        getFemaleDummyImageForDeathNews,
        getAboutUs,
        getDonateUs,
        getMainPageBanners,
        getLastUpdateTimeOfPopUpScreen,
        saveAppOpeningTime,
        getDeathNews,
        getEventNews,
        createUserInDB,
        removeSavedUser,
        getCurrentUserData
    })(AppNavigatior);
