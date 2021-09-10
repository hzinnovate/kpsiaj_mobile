import React, { useCallback } from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NewsEventsStyles } from '../../config/StylesCss';
import { month } from '../../config/AppConfigData';
import { useSelector } from 'react-redux';

export const EventList = (props) => {
    let { showDetail, setShowDetail } = props;
    let events = useSelector(({ news }) => news.eventNews)
    const renderItem = useCallback(
        ({ item }) => <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowDetail(item)}
            style={NewsEventsStyles.listItm}>
            <Text
                style={NewsEventsStyles.listTxt}>
                {item.title}
            </Text>
            <Text
                style={NewsEventsStyles.list2ndTxt}>
                {getDate(item.timeStamp)}</Text>
        </TouchableOpacity>
    )
    const keyExtractor = useCallback((item) => item.timeStamp.toString(), [])
    function getDate(param) {
        let date = new Date(param).getDate()
        let year = new Date(param).getFullYear()
        let NumOfMonth = new Date(param).getMonth()
        let convertedMonth = month[NumOfMonth]
        return date + '-' + convertedMonth + '-' + year
    }
    if (events && events.length) {
        let sorted = events.sort((a, b) => a.timeStamp - b.timeStamp);
        let display = sorted.reverse()
        return (
            <>
                <HeaderDivComp heading={"News & Events"} />
                <View style={[NewsEventsStyles.mainscreen, { marginTop: 50 }]}>
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