import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { mainScreenbuttonsStyles } from '../../config/StylesCss';
import { useNavigation } from '@react-navigation/native';

export default function Button(props) {
  let navigation = useNavigation()
  return (
    <View style={mainScreenbuttonsStyles.buttonContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${props.rought}`, { header: !!props.header ? props.header : "", name: !!props.name ? props.name : "", link: !!props.link ? props.link : "" })}
        style={mainScreenbuttonsStyles.button}>
        {props.icn}
        <Text
          style={mainScreenbuttonsStyles.buttonText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}