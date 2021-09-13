import React from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { text as texts, images } from '../../config/AppConfigData';
import { deathNewsDetailCompStyles } from '../../config/StylesCss';
import { onShareDeathNews, onDownloadDeathNews } from "../../functions";

const maleImage = images.noImage;
const famaleImage = images.femaleForDeathnews;

export const ObituaryDetail = (props) => {
    let { showDetail, setShowDetail } = props;
    function onBackPress() {
        setShowDetail("")
    }
    const { imageUrl, imageID, imageName, imageType, nameString, burialInfo, dateTimeString, name, fatherName, maleFemale, husbandName, age, wasOrToBe, dateOfNamaz, timeOfNamaz, placeOfNamaz } = showDetail;
    const text = `${texts.deathNewsShareHeaderText}${'*' + name + (fatherName !== '' && (maleFemale === 'male' ? ' s/o ' : ' d/o ') + fatherName) + (husbandName !== '' && husbandName) + '*'}${'\n\nAge: ' + age + ' years\n'}${burialInfo !== '' && burialInfo} ${'\n*' + 'Namaz-e-Janaza ' + wasOrToBe + ' offered on ' + dateOfNamaz + ' ' + timeOfNamaz + ' ' + placeOfNamaz + '*'} ${texts.deathNewsShareFooterText}`
    const renderImage = () => {
        return (
            <Image
                style={deathNewsDetailCompStyles.rImage}
                source={maleFemale == 'male' ? (imageUrl ? { uri: imageUrl } : maleImage) : famaleImage}
                resizeMode='contain'
            />
        )
    }
    const renderText = () => {
        return (
            <View style={[deathNewsDetailCompStyles.rTxtCont, { marginBottom: 50 }]}>
                <Text style={deathNewsDetailCompStyles.rtxt}>{texts.deathNewsHeaderText}</Text>
                <Text style={deathNewsDetailCompStyles.rTxtBold}>{nameString + burialInfo + dateTimeString}</Text>
                <Text style={deathNewsDetailCompStyles.rtxt}>{texts.deathNewsFooterText}</Text>
            </View>
        )
    }
    const renderButtons = () => {
        return (
            <View style={deathNewsDetailCompStyles.btnContainer}>
                {imageUrl ? <TouchableOpacity
                    onPress={() => onDownloadDeathNews(imageUrl)}
                    style={deathNewsDetailCompStyles.btn}>
                    {/* <DeathNewsDownloadIcn /> */}
                    <Text style={deathNewsDetailCompStyles.btnTxt}>Save Image</Text>
                </TouchableOpacity>
                    : <View></View>}
                <TouchableOpacity
                    onPress={() => onShareDeathNews(text, imageUrl || "", imageType || "")}
                    style={deathNewsDetailCompStyles.btn}>
                    {/* <DeathNewsShareIcn /> */}
                    <Text style={deathNewsDetailCompStyles.btnTxt}>Share News</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <HeaderDivComp heading={"Back"} onBackPress={onBackPress} customizeBackButton={true} />
            <View style={{ marginVertical: 50 }}>
                <ScrollView style={{ padding: 15 }}>{renderImage()}{renderText()}</ScrollView>
            </View>
            {renderButtons()}
        </View>
    )
}