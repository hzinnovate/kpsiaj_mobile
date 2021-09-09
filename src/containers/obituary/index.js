import React from 'react';
import {
    HeaderDivComp,
} from '../../components';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { NewsEventsStyles, deathNewsStyles } from '../../config/StylesCss';
import { text } from '../../config/AppConfigData';
import { useSelector } from 'react-redux';

export default ObituaryContainer = () => {
    let deathNews = useSelector(({ news }) => news.deathNews)

    if (deathNews && deathNews.length) {
        let sorted = deathNews.sort((a, b) => a.timeStamp - b.timeStamp);
        let display = sorted.reverse()
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderDivComp heading={"Obituary"} />
                <View style={[NewsEventsStyles.mainscreen, { marginTop: 50 }]}>
                    <View style={{ justifyContent: 'space-evenly', height: 100 }}>
                        <Text style={deathNewsStyles.txt}>{text.deathNewsListTopText}</Text>
                    </View>
                    <FlatList
                        data={display}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('DeathNewsDetail', { DetailDeathNews: display[display.indexOf(item)] })}
                                style={deathNewsStyles.listItm}>
                                <Text style={deathNewsStyles.listTxt}> {item.name}</Text>
                                <Text style={deathNewsStyles.listTxtDate}> {`${item.dateOfNamaz} ${item.timeOfNamaz} ${item.placeOfNamaz}`} </Text>
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