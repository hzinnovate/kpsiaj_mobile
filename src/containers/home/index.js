import React from 'react';
import {MainPageBanners, Buttons, Logoline, HomePopUp} from '../../components';
import {mainScreenStyles} from '../../config/StylesCss';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {text, colors} from '../../config/AppConfigData';

import {ICONS} from '../../constants';

export default HomeContainer = () => {
  let allFlags = useSelector(({general}) => general.allFlags);
  let navigation = useNavigation();
  return (
    <SafeAreaView style={mainScreenStyles.container}>
      <View style={mainScreenStyles.container}>
        {!!allFlags && !!allFlags.settingsFlag && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('settings')}
            style={{position: 'absolute', right: 15, zIndex: 20}}>
            <ICONS.MaterialIcons name="settings" size={22} color="#ECEAE4" />
          </TouchableOpacity>
        )}
        <HomePopUp navigateProp={navigation} />
        {!!allFlags && !!allFlags.logoFlag && <Logoline />}
        <View style={mainScreenStyles.mainscreen}>
          <ScrollView>
            {!!allFlags && !!allFlags.mainPageBannerFlag && (
              <View style={mainScreenStyles.shadowImage}>
                <MainPageBanners navigation={navigation} />
              </View>
            )}
            <Buttons />
            <Text style={mainScreenStyles.footerTxt}>
              {text.mainFooterText}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
