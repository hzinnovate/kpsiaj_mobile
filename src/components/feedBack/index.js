import React from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderDivComp } from "../headerDivComp";
import { DropDownField } from '../../shared';
import { FONTS, COLORS, SIZES } from "../../constants";

export default FeedBackComponent = (props) => {
    const {
        onSubmit,
        onInputChange,
        fullName,
        fatherName,
        email,
        feedbackText,
        departmentsForFeedBack,
        departmentsForFeedBackText,
        phoneNumber,
        feedBackCatogeries
    } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderDivComp heading="Feedback" />
            <View style={{ marginTop: 50, padding: 20, backgroundColor: 'white', flex: 1 }}>
                <ScrollView>
                    <TextInput
                        placeholder="Full Name"
                        value={fullName || ""}
                        onChangeText={(e) => onInputChange('fullName', e)}
                        maxLength={30}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}
                    />
                    <TextInput
                        placeholder="Father / Husband Name"
                        value={fatherName || ""}
                        onChangeText={(e) => onInputChange('fatherName', e)}
                        maxLength={30}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />
                    <TextInput
                        placeholder="Email Address"
                        value={email || ""}
                        onChangeText={(e) => onInputChange('email', e)}
                        keyboardType={"email-address"}
                        maxLength={40}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />
                    <TextInput
                        placeholder="Phone Number"
                        value={phoneNumber || ""}
                        onChangeText={(e) => onInputChange('phoneNumber', e)}
                        keyboardType={"number-pad"}
                        maxLength={20}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />
                    {/* Drop Down for select departmentForFeedBack */}
                    <View style={{ marginVertical: 10 }}>
                        <DropDownField
                            loader={false}
                            placeholder={'Select Feedback Catogery'}
                            value={departmentsForFeedBack || ""}
                            style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                            label={'Feedback Catogeries'}
                            labelStyle={styles.labelStyle}
                            onTermChange={val => {
                                onInputChange('departmentsForFeedBack', val)
                            }
                            }
                            // error={false}
                            validationStatus={"Required"}
                            validationStatusStyle={styles.validationStatusStyle}
                            itemList={feedBackCatogeries || []}
                        />
                    </View>
                    {!!(departmentsForFeedBack === "Other") && <TextInput
                        placeholder="Related to"
                        value={departmentsForFeedBackText || ""}
                        onChangeText={(e) => onInputChange('departmentsForFeedBackText', e)}
                        maxLength={40}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />}
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Message</Text>
                            <Text style={{ color: 'red' }}>Required</Text>
                        </View>
                        <TextInput
                            placeholder="Message"
                            value={feedbackText || ""}
                            onChangeText={(e) => onInputChange('feedbackText', e)}
                            multiline={true}
                            numberOfLines={10}
                            maxLength={400}
                            style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10, textAlignVertical: 'top', textAlign: 'justify' }}

                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => onSubmit()}
                        activeOpacity={0.8}
                        style={{ alignSelf: "flex-end", marginHorizontal: 20, marginVertical: 20, padding: 10, backgroundColor: 'brown', width: 100, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={{ color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    checkbox: {
        borderWidth: 2,
        borderColor: COLORS.yellow,
        borderRadius: 4,
        marginRight: 10,
        width: 20,
        height: 20,
        marginTop: -10
    },
    checkboxText: {
        color: COLORS.black1,
        //   ...FONTS.h3_r.Poppins,
        width: '90%'
    },
    container: { display: 'flex', justifyContent: 'space-between', flex: 1 },
    stripButton: {
        backgroundColor: COLORS.black1,
        width: 150,
        marginBottom: 100,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stripButtonTxt: {
        color: COLORS.light,
        // ...FONTS.body3_b.OpenSans 
    },
    labelStyle: {},
    validationStatusStyle: {
        color: COLORS.yellow,
    },
    btnRight: {
        //   ...FONTS.h1_b.Poppins,
        color: COLORS.gray3,
    },
    body: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: '2%',
    },
    labelStyle: {
        paddingBottom: '4%',
    },
    textInput: {
        marginBottom: '6%',
        width: '100%',
        textTransform: 'capitalize'
    },
    paymentText: {
        ...FONTS.h_m.Poppins,
        color: COLORS.black1,
        marginTop: '5%',
        marginBottom: '8%',
        lineHeight: 24,
    },
    languageLink: { width: '30%', paddingVertical: '2%' },
    languageText: {
        //   ...FONTS.h1_r.Poppins,
        color: COLORS.black1,
        marginBottom: '8%',
        lineHeight: 24,
        textDecorationLine: 'underline',
    },
    _row: { flexDirection: 'row', marginBottom: SIZES.height * 0.05 },
    _col1: { flex: 0.8, marginRight: '2%' },
    _col2: { flex: 0.8 },
    _imgStyle: {
        marginTop: SIZES.height * 0.04,
    },
    _space: { height: 30 },
    header: {
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        borderBottomColor: COLORS.lightGray1,
        borderBottomWidth: 0.5,
    },
    headerText: {
        //   ...FONTS.h1_m.Poppins,
        color: COLORS.black1,
        marginRight: -10,
        lineHeight: 24,
    },
    headerRightImage: {
        width: 24,
        height: 26,
    },
    headerRightBtn: {
        //   ...FONTS.h1_m.Poppins,
        color: COLORS.black1,
        lineHeight: 24,
    },
})
