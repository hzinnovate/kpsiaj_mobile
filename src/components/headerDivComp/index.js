import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../constants';
import { images as img } from '../../config/AppConfigData.js';

export const HeaderDivComp = (props) => {
    let navigation = useNavigation();
    let { heading, onBackPress, customizeBackButton } = props;

    useEffect(
        React.useCallback(() => {
            const onBackPressFunc = () => {
                if (customizeBackButton) {
                    onBackPress();
                    return true;
                } else {
                    return false;
                }
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPressFunc);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPressFunc);
        }, [])
    );
    return (
        <View
            style={{zIndex: 100, position: 'absolute', top: 0, left: 0, right: 0, height: 50, elevation: 7.5, backgroundColor: '#ECEAE4', borderBottomColor: 'grey', borderBottomWidth: 0.4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <View style={{ display: 'flex', flexDirection: 'row', flex: 3 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => customizeBackButton ? onBackPress() : navigation.goBack()}
                    style={{ paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}
                >
                    <ICONS.FontAwesome name="backward" size={14} color="#725054" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#725054" }}>{heading || ""}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                <Image source={img.navBarLogo} style={{ height: 40, width: 40 }} />
            </View>
        </View>
    )
}