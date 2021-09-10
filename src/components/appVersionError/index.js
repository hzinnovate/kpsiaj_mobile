import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { appVersionStyles } from '../../config/StylesCss';
import { text, appLink } from '../../config/AppConfigData';

export default function App_Version_Error() {
    return (
        <View style={appVersionStyles.container}>
            <Text style={appVersionStyles.text}>{text.appVersionErrorCaption}</Text>
            <View style={appVersionStyles.btnContainer}>
                <TouchableOpacity style={appVersionStyles.btn} onPress={() => { Linking.openURL(appLink.androidPlayStoreKpsiaj); }} >
                    <Text style={appVersionStyles.btnTxt}>
                        Update Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

