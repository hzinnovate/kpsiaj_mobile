import React, { Component } from 'react';
// import { View, StatusBar } from 'react-native';
// import { auth } from '../config';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './rootNavigation';
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
    getEventNews
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
                isHittingOneTimeApis: false
            }
        }
    }
    static getDerivedStateFromProps(props, state) {
        let obj = { ...state.oneTimeApis }
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
            getEventNews
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
        getEventNews
    })(AppNavigatior);
