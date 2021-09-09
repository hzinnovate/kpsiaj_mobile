import React from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { NewsEventsStyles } from '../../config/StylesCss';
import { month } from '../../config/AppConfigData';
import { useSelector } from 'react-redux';

export default NewsEventsContainer = () => {
    let events = useSelector(({ news }) => news.eventNews)
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
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderDivComp heading={"News & Events"} />
                <View style={[NewsEventsStyles.mainscreen, { marginTop: 50 }]}>
                    <FlatList
                        data={display}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={
                                //     () => navigation.navigate('NEDetail', { DetaileventNews: display[display.indexOf(item)] })}
                                style={NewsEventsStyles.listItm}>
                                <Text
                                    style={NewsEventsStyles.listTxt}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={NewsEventsStyles.list2ndTxt}>
                                    {getDate(item.timeStamp)}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.timeStamp.toString()}
                    />
                </View>
            </SafeAreaView>
        )
    }
    else {
        return (
            <HeaderDivComp heading={"News & Events"} />
        )
    }
}