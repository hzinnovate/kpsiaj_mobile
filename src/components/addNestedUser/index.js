import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderDivComp } from "../headerDivComp";
import { DropDownField } from '../../shared';
import { FONTS, COLORS, SIZES } from "../../constants";
import DatePicker from 'react-native-date-picker'

export const AddNestedUserComponent = (props) => {
    let [open, setOpen] = useState(false)
    const { fullName,
        fatherName,
        countryName,
        dateOfBirth,
        gender,
        countryList,
        goBack,
        onSubmit,
        onInputChange,
        onDeletUser,
        isUpdate } = props;
    return <SafeAreaView style={{ flex: 1 }}>
        <HeaderDivComp heading={isUpdate ? "Edit User" : "Add User"} />
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
                <View style={{ marginVertical: 10 }}>
                    <DropDownField
                        loader={false}
                        placeholder={'Select Country'}
                        value={countryName || ""}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                        label={''}
                        labelStyle={styles.labelStyle}
                        onTermChange={val => {
                            onInputChange('countryName', val)
                        }
                        }
                        // error={false}
                        validationStatus={""}
                        validationStatusStyle={styles.validationStatusStyle}
                        itemList={countryList || []}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <DropDownField
                        loader={false}
                        placeholder={'Select Gender'}
                        value={gender || ""}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                        label={''}
                        labelStyle={styles.labelStyle}
                        onTermChange={val => {
                            onInputChange('gender', val)
                        }
                        }
                        // error={false}
                        validationStatus={""}
                        validationStatusStyle={styles.validationStatusStyle}
                        itemList={["Male", "Female"]}
                    />
                </View>
                {<TouchableOpacity
                    onPress={() => setOpen(true)}
                >
                    <TextInput
                        placeholder="Select Date"
                        value={dateOfBirth}
                        editable={false}
                        style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}
                    />
                </TouchableOpacity>}
                {<DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={!!dateOfBirth ? new Date(dateOfBirth) : new Date()}
                    // minimumDate={new Date()}
                    maximumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        onInputChange('dateOfBirth', date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />}
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => goBack()}
                        style={{ margin: 10, width: 80, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'brown', borderRadius: 10 }}
                    >
                        <Text style={{ color: "white" }}>Cancel</Text>
                    </TouchableOpacity>
                    {isUpdate && <TouchableOpacity
                        onPress={() => onDeletUser()}
                        style={{ margin: 10, width: 80, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'brown', borderRadius: 10 }}
                    >
                        <Text style={{ color: "white" }}>Delete</Text>
                    </TouchableOpacity>}
                    <TouchableOpacity
                        onPress={() => onSubmit()}
                        style={{ margin: 10, width: 80, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'brown', borderRadius: 10 }}
                    >
                        <Text style={{ color: "white" }}>{isUpdate ? "Update" : "Add"}</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text style={{ textAlign: 'center', fontSize: 16 }}>Select Date of Birth and Gender</Text> */}
            </View>
        </ScrollView>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    validationStatusStyle: {
        color: COLORS.yellow,
    },
    labelStyle: {
        paddingBottom: '4%',
    },
})
