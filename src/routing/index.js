import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
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

    // async componentDidMount() {
    //     // auth().signOut()
    //     this.props.getCountries();
    //     if (!getAppStorage('rtkn')) {
    //         this.props.stopFetchingUser();
    //     }

    //     auth().onAuthStateChanged(async userAuth => {
    //         // console.log('login=>', userAuth)
    //         try {
    //             // console.log('onAuthStateChanged ', userAuth)
    //             if (userAuth) {
    //                 setAppStorage('rtkn', userAuth.uid)
    //             } else {
    //                 removeAppStorageByKey('rtkn')
    //             }
    //             if (userAuth && userAuth.emailVerified) {
    //                 this.props.fetchingUser();
    //                 this.props.resetSigninUserState(userAuth);
    //             } else if (userAuth && !userAuth.emailVerified) {
    //                 // this.props.signout()
    //                 this.props.stopFetchingUser();
    //             } else {
    //                 this.props.stopFetchingUser();
    //             }
    //         } catch (error) {
    //             console.log('error from on auth state change', error)
    //         }
    //     });


    // }
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
    // static getDerivedStateFromProps(props, state) {
    // const { isUserExist, user } = props;
    // let obj = props.oneTimeApis
    // try {
    //     if (isUserExist && user._id && user.token && !obj.isHittingOneTimeAuthenticApis) {
    //         let headers = {
    //             userid: user._id,
    //             token: user.token
    //         }
    //         props.setUserBySocket(headers);  // done
    //         props.setEventBySocket(headers); // done
    //         props.getDisputeBySocket(headers); // done
    //         props.getEvents(headers); // done
    //         props.getCustomerPaymentStats(headers) // done
    //         props.setUserStatsBySocket(headers); // done
    //         // props.getDashboardStats(headers); // getCustomerPaymentStats
    //         props.getNotifications(headers) // done
    //         props.getNotificationBySocket(headers); // done
    //         props.getExperiences(headers); // done
    //         props.getBlockedChatBySocket(headers); // done
    //         props.chatListenerSocket(headers); // done
    //         props.messageListenerSocket(headers); // done
    //         props.getFavorites({ _id: user._id, token: user.token }); // done
    //         props.checkFcmTokenInDb(user)
    //         props.getSubscribedEventsBySocket(headers);
    //         props.getCustomerCancelledEvents(headers);
    //         props.getSubscribedSlotsBySocket(headers);
    //         props.getExclusiveRequestsBySocket(headers);
    //         props.getStripeAccountInfoBySocket(headers);
    //         obj.isHittingOneTimeAuthenticApis = true;
    //         props.initialApisState(true, obj)
    //     }
    //     if (!obj.isHittingOneTimeApis) {
    //         props.getDefaultDataBySocket();
    //         props.getDefaultData();
    //         props.getActiveEventBySocket(); // done
    //         props.getAllActiveEvents(); // done
    //         props.getAllContributors(); // done
    //         props.setUniversalContributorBySocket(); // done
    //         props.getAllExperiences(); // done
    //         obj.isHittingOneTimeApis = true;
    //         props.initialApisState(true, obj)
    //     };
    //     if (isUserExist && user.contributor && user.contributor.status && user.contributor.status === "approved" && !obj.isHittingContributorApis) {
    //         let headers = {
    //             userid: user._id,
    //             token: user.token
    //         }
    //         props.getContributorDisputeBySocket(headers); // done
    //         props.getSessionsClicks(headers); // done
    //         props.setExperienceBySocket(headers); // done
    //         obj.isHittingContributorApis = true;
    //         props.initialApisState(true, obj)
    //     }
    // } catch (error) {
    //     console.log('error from sokit initialize in routing file', error)
    // }
    // return obj, () => { isReadyRef.current = false };
    // }

    render() {
        return (
            <NavigationContainer ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true
                }}
            // linking={linking}
            >
                <StatusBar animated={true} barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
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
        // oneTimeApis: auth.oneTimeApis,
        // isUserExist: auth.isUserExist,
        // isLoading: auth.isLoading,
        // isFetchingUser: auth.isFetchingUser,
        // isToastShowing: toast.isToastShowing,
        toastConfig: toast.config,
        // routingState: routingState
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
