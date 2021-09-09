import React from 'react';
import { useWindowDimensions, Linking } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';

export const RenderHTMLComponent = (props) => {
    let { htmlData } = props;
    const { width } = useWindowDimensions();

    function onPress(event, href) {
        if (href) {
            Linking.openURL(href)
        }
    }
    return (
        <RenderHtml
            contentWidth={width}
            source={{ html: htmlData }}
            renderersProps={{ a: { onPress: onPress } }}
        />
    )

}

export const RenderWebViewComponent = (props) => {
    let { link } = props;
    return (
        <WebView
            originWhitelist={['*']}
            source={{ uri: link }}
        />
    )
}