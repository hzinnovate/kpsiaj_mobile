import React from 'react';
import { useWindowDimensions, Linking } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";

export const RenderHTMLComponent = (props) => {
    let { htmlData } = props;
    const { width } = useWindowDimensions();
    let navigation = useNavigation();

    function onPress(event, href) {
        if (href) {
            // Linking.openURL(href)
            navigation.navigate(`RenderHTMLContainer`, { header: "Back", name: !!props.name ? props.name : "", link: href })
        }
    }
    return (
        <RenderHtml
            contentWidth={width}
            source={{ html: htmlData }}
            renderersProps={{ a: { onPress: onPress } }}
            enableExperimentalMarginCollapsing={true}
            tagsStyles={{ p: { textAlign: 'justify', margin: 3 } }}
            ignoredTags={['br']}
            textSelectable={true}
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