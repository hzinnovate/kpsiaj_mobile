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
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ padding: 30 }}>
                    <TextInput
                        placeholder="Full Name"
                        value={fullName || ""}
                        onChangeText={(e) => onInputChange('fullName', e)}
                        maxLength={30}
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}
                    />
                    <TextInput
                        placeholder="Father / Husband Name"
                        value={fatherName || ""}
                        onChangeText={(e) => onInputChange('fatherName', e)}
                        maxLength={30}
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />
                    <TextInput
                        placeholder="Email Address"
                        value={email || ""}
                        onChangeText={(e) => onInputChange('email', e)}
                        keyboardType={"email-address"}
                        maxLength={40}
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                    />
                    <TextInput
                        placeholder="Phone Number"
                        value={phoneNumber || ""}
                        onChangeText={(e) => onInputChange('phoneNumber', e)}
                        keyboardType={"number-pad"}
                        maxLength={20}
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

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
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    validationStatusStyle: {
        color: COLORS.yellow,
    },
    labelStyle: {
        paddingBottom: '4%',
    },
})
