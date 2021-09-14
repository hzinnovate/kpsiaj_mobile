import React from 'react';
import Button from './buttonsView';
import { View, TouchableOpacity, Text } from 'react-native';
import { buttonsContainerStyles } from '../../config/StylesCss';
import { ICONS } from '../../constants';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Buttons() {
    let allFlags = useSelector(({ general }) => general.allFlags)
    let navigation = useNavigation()
    const styles = {
        dashBoardButtons: { fontSize: 20, color: '#ECEAE4', textShadowColor: 'black' }
    }
    return !!allFlags && <View style={buttonsContainerStyles.buttonsContainer}>
        {!!allFlags.newsFlag && <Button icn={<ICONS.FontAwesome name='newspaper-o' style={styles.dashBoardButtons} />} text={'News'} rought={'NewsEventsContainer'} />}
        {!!allFlags.obituaryFlag && <Button icn={<ICONS.Entypo name='news' style={styles.dashBoardButtons} />} text={'Obituary'} rought={'ObituaryContainer'} />}
        {!!allFlags.graveSearchFlag && <Button icn={<ICONS.MaterialCommunityIcons name='grave-stone' style={styles.dashBoardButtons} />} text={'Grave search'} rought={'RenderHTMLContainer'} header="Grave Search" link="https://kpsiaj.org/gravesearch/" />}
        {!!allFlags.downloadsFlag && <Button icn={<ICONS.Entypo name='download' style={styles.dashBoardButtons} />} text={'Downloads'} rought={'DownloadsContainer'} />}
        {!!allFlags.aboutFlag && <Button icn={<ICONS.AntDesign name='exception1' style={styles.dashBoardButtons} />} text={'About'} rought={'RenderHTMLContainer'} name={"aboutUs"} header="About Us" />}
        {!!allFlags.contactUsFlag && <Button icn={<ICONS.AntDesign name='contacts' style={styles.dashBoardButtons} />} text={'Contact us'} rought={'ContactUsContainer'} />}
        {!!allFlags.feedbackFlag && <Button icn={<ICONS.MaterialIcons name='feedback' style={styles.dashBoardButtons} />} text={'Feedback'} rought={'FeedBackContainer'} />}
        {!allFlags.ramzanQuizFlag && <Button icn={<ICONS.MaterialIcons name='question-answer' style={styles.dashBoardButtons} />} text={'Quiz'} rought={'QuizContainer'} />}
        {!allFlags.telethoneFlag && <Button icn={<ICONS.AntDesign name='customerservice' style={styles.dashBoardButtons} />} text={'Telethon'} rought={'TelethonContainer'} />}
        {!!allFlags.donateFlag &&
            <TouchableOpacity
                onPress={() => navigation.navigate('RenderHTMLContainer', { header: "Donate", name: "donateUs" })}
                style={buttonsContainerStyles.donteButton}>
                <Text style={buttonsContainerStyles.donateButtonText}>
                    Donate</Text>
            </TouchableOpacity>}
    </View>
}