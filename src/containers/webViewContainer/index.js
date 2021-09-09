import React from 'react';
import { WebView } from 'react-native-webview';
import { useWindowDimensions, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default WebContainer = (props) => {
    const { width } = useWindowDimensions();
    let { route } = props;
    let link = ""
    let header = ""
    if (route && route.params && props.route.params) {
        let obj = props.route.params;
        if (obj.link) {
            link = obj.link
        }
        if (obj.header) {
            header = obj.header
        }
    }
    function onPress(event, href) {
        if (href) {
            Linking.openURL(href)
        }
    }
    return (
        <SafeAreaView>
            <View>
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: 'https://reactnative.dev/' }}
                />
            </View>
        </SafeAreaView>
    );
}
