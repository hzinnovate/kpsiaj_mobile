import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native';
import { HeaderDivComp, RenderHTMLComponent } from '../../components';
import { FONTS, COLORS, SIZES, ICONS } from "../../constants";
import { signout } from "../../store/actions";
import { useDispatch } from 'react-redux';
import { DropSlideCard } from "../../shared";
import { useNavigation } from '@react-navigation/core';
export default QuizComponent = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { user } = props;
    const { users } = user;
    function dropComponent() {
        return <RenderHTMLComponent htmlData={`<h1>Hello World</h1>`} />
    }
    function renderItem(item) {
        return <TouchableOpacity
            // onPress={() => this.props.navigation.navigate(`RamzanQuizStart`, item.perFormUid)}
            style={{ height: 60, backgroundColor: '#ECEAE4', padding: 5, margin: 8, borderRadius: 5, justifyContent: 'space-evenly', elevation: 5 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>{item.fullName}</Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate("AddNestedUsers", { isUpdate: item.uid }) }}
                style={{ position: "absolute", right: 5 }}
            >
                <ICONS.MaterialCommunityIcons name={'account-edit'} size={40} color={'#725054'} />
            </TouchableOpacity>
        </TouchableOpacity>
    }
    function renderUserList() {
        let userArr = Object.values(users)
        return <FlatList
            data={userArr}
            renderItem={({ item }) => renderItem(item)}
            initialNumToRender={2}
            keyExtractor={item => item.uid.toString()}
        />
    }
    return  <SafeAreaView style={{ flex: 1 , backgroundColor: "#725054"}}>
    <View style={{flex: 1, backgroundColor: "white"}}>
        <HeaderDivComp heading={"Quiz Program"} />
        <View style={{ marginTop: 50 }}>
            <View style={{ position: 'absolute', top: 0, right: 0 }}>
                <TouchableOpacity
                    onPress={() => dispatch(signout())}
                    style={{ backgroundColor: '#725054', height: 50, width: 60, borderRadius: 10, borderBottomLeftRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 10, elevation: 3 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>LogOut</Text>
                    <ICONS.FontAwesome name='power-off' size={14} color="white" />
                </TouchableOpacity>
            </View>
            <DropSlideCard mainTitle="Rules & Regulations" component={dropComponent} />
            <View style={{ marginTop: 75 }}>
                <Text style={{ textAlign: 'center', padding: 10, fontSize: 16 }}>Please select a user from the list below or add a new user to attempt available quiz</Text>
                {!!users && renderUserList()}
            </View>
        </View>
        {(!users || Object.keys(users).length < 5) && <>
            <TouchableOpacity
                onPress={() => navigation.navigate("AddNestedUsers")}
                style={{ backgroundColor: 'green', width: 50, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 25, right: 20, elevation: 3 }}>
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
        </>}
        </View>
    </SafeAreaView>
}