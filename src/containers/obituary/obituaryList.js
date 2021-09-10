import React, { useCallback } from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NewsEventsStyles, deathNewsStyles } from '../../config/StylesCss';
import { useSelector } from 'react-redux';
import { text } from '../../config/AppConfigData';

export const ObituaryList = (props) => {
    let { showDetail, setShowDetail } = props;
    let deathNews = useSelector(({ news }) => news.deathNews)
    const renderItem = useCallback(
        ({ item }) => <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowDetail(item)}
            style={deathNewsStyles.listItm}>
            <Text style={deathNewsStyles.listTxt}> {item.name}</Text>
            <Text style={deathNewsStyles.listTxtDate}> {`${item.dateOfNamaz} ${item.timeOfNamaz} ${item.placeOfNamaz}`} </Text>
        </TouchableOpacity>
    )
    const keyExtractor = useCallback((item) => item.timeStamp.toString(), [])
    if (deathNews && deathNews.length) {
        let sorted = deathNews.sort((a, b) => a.timeStamp - b.timeStamp);
        let display = sorted.reverse()
        return (
            <>
                <HeaderDivComp heading={"Obituary"} />
                <View style={[NewsEventsStyles.mainscreen, { marginTop: 50 }]}>
                    <View style={{ justifyContent: 'space-evenly', height: 100 }}>
                        <Text style={deathNewsStyles.txt}>{text.deathNewsListTopText}</Text>
                    </View>
                    <FlatList
                        data={display}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        initialNumToRender={10}
                    />
                </View>
            </>
        )
    }
    else {
        return (
            <HeaderDivComp heading={"News & Events"} />
        )
    }
}