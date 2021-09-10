import React, { useState } from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { SafeAreaView, useWindowDimensions, Linking, ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Pdf from 'react-native-pdf';
import Video from 'react-native-video';
import { newsEventsDetailStyles } from '../../config/StylesCss';
import { useNavigation } from '@react-navigation/core';
import { onShare } from "../../functions";

export const EventDetail = (props) => {
    let { showDetail, setShowDetail } = props;
    const [isVideoPaused, setIsVideoPaused] = useState(false)
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const { imageUrls, text, imageUrl } = showDetail;
    function onPress(event, href) {
        if (href) {
            Linking.openURL(href)
        }
    }
    function onBackPress() {
        console.log('back')
        setShowDetail("")
    }
    const renderMedia = (imageUrls, imageUrl) => {
        if ((imageUrls && imageUrls.length) || imageUrl) {
            let type = ''
            let url = ''
            if (imageUrls && imageUrls.length) {
                type = imageUrls && imageUrls.length && imageUrls[0].type
                url = imageUrls && imageUrls.length && imageUrls[0].url
            } else if (imageUrl) {
                type = imageUrl && imageUrl.type
                url = imageUrl && imageUrl.url
            }
            switch (type) {
                case "application/pdf":
                    return <Pdf
                        source={{ uri: url, cache: true }}
                        style={newsEventsDetailStyles.pdf}
                    />;
                case "video/mp4":
                    return <Video
                        source={{ uri: url }}   // Can be a URL or a local file.
                        style={newsEventsDetailStyles.video}
                        controls={true}
                        paused={isVideoPaused}
                        resizeMode='contain'
                    />;
                case "image/png":
                case "image/jpg":
                case "image/jpeg":
                case "image/gif":
                case "image/webp":
                    return <Image
                        style={newsEventsDetailStyles.img}
                        source={{ uri: url, cache: true }}
                    />;
            }
        }
    }


    const renderText = (text) => {
        return (
            // <RenderHTMLComponent
            //     htmlData={text}
            // />
            <RenderHtml
                contentWidth={width}
                source={{ html: text }}
                renderersProps={{ a: { onPress: onPress } }}
                tagsStyles={{ p: { margin: 3 } }}
                ignoredTags={['br']}
                textSelectable={true}
            />
        )
    }
    const handleVideo = (media) => {
        setIsVideoPaused(true)
        console.log('media')
        navigation.navigate('MediaContainer', media)
    }
    const renderButtons = (media) => {
        let type = media[0].type
        let url = media[0].url
        return (
            <View style={newsEventsDetailStyles.btnContainer}>
                <TouchableOpacity
                    // onPress={() => onDownload(url, type)}
                    style={newsEventsDetailStyles.btn}>
                    {/* <DeathNewsDownloadIcn /> */}
                    <Text style={newsEventsDetailStyles.btnTxt}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onShare(url, type)}
                    style={newsEventsDetailStyles.btn}>
                    {/* <DeathNewsShareIcn /> */}
                    <Text style={newsEventsDetailStyles.btnTxt}>
                        Share</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleVideo(media)}
                    style={newsEventsDetailStyles.btn}>
                    {/* <FullScreenIcn /> */}
                    <Text style={newsEventsDetailStyles.btnTxt}>
                        Full Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={newsEventsDetailStyles.mainscreen}>
            <HeaderDivComp heading={"Back"} onBackPress={onBackPress} customizeBackButton={true} />
            <ScrollView style={{ marginTop: 60 }} >
                <View style={newsEventsDetailStyles.main}>
                    {renderMedia(imageUrls, imageUrl)}
                    <View style={{ padding: 10 }}>
                        {text && renderText(text)}
                    </View>
                </View>
            </ScrollView>
            {imageUrls && imageUrls.length && renderButtons(imageUrls)}
        </View>
    )
}