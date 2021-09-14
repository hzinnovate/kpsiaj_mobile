import React from 'react';
import { SafeAreaView, Image, View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { DropDownField } from '../../shared';
import { FONTS, COLORS, SIZES, ICONS } from "../../constants";
import { signout } from "../../store/actions";
import { useDispatch } from 'react-redux';

export const TelethonForm = (props) => {
    const dispatch = useDispatch()
    const {
        onSubmit,
        onInputChange,
        countryList,
        dedicatedForValues,
        donationTypeValues,
        currencyValues,
        fullName,
        fatherName,
        email,
        amount,
        dedicatedFor,
        dedicatedForOtherText,
        currency,
        countryName,
        donationType
    } = props;
    return (
        <ScrollView>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => dispatch(signout())}
                    style={{ backgroundColor: '#725054', height: 50, width: 60, borderRadius: 10, borderBottomLeftRadius: 30, justifyContent: 'center', alignItems: 'center', margin: 10, elevation: 3 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>LogOut</Text>
                    <ICONS.FontAwesome name='power-off' size={14} color="white" />
                </TouchableOpacity>
            </View>
            <Image
                style={{ height: 150, width: 200, alignSelf: 'center', marginTop: -50, marginBottom: 10 }}
                source={require('../../assets/Telethon_Logo.webp')}
            />
            <View style={{ marginHorizontal: 30, paddingBottom: 50 }}>
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
                <View style={{ marginVertical: 10 }}>
                    <DropDownField
                        loader={false}
                        placeholder={'Select Type'}
                        value={donationType || ""}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                        label={''}
                        labelStyle={styles.labelStyle}
                        onTermChange={val => {
                            onInputChange('donationType', val)
                        }
                        }
                        // error={false}
                        validationStatus={""}
                        validationStatusStyle={styles.validationStatusStyle}
                        itemList={donationTypeValues || []}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <DropDownField
                        loader={false}
                        placeholder={'Select Type'}
                        value={dedicatedFor || ""}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                        label={''}
                        labelStyle={styles.labelStyle}
                        onTermChange={val => {
                            onInputChange('dedicatedFor', val)
                        }
                        }
                        // error={false}
                        validationStatus={""}
                        validationStatusStyle={styles.validationStatusStyle}
                        itemList={dedicatedForValues || []}
                    />
                </View>
                {!!(dedicatedFor === "Other") && <TextInput
                    placeholder="Related to"
                    value={dedicatedForOtherText || ""}
                    onChangeText={(e) => onInputChange('dedicatedForOtherText', e)}
                    maxLength={40}
                    style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}

                />}
                <View style={{ marginVertical: 10 }}>
                    <DropDownField
                        loader={false}
                        placeholder={'Select Type'}
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
                        placeholder={'Select Type'}
                        value={currency || ""}
                        style={{ color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, fontSize: 18, }}
                        label={''}
                        labelStyle={styles.labelStyle}
                        onTermChange={val => {
                            onInputChange('currency', val)
                        }
                        }
                        // error={false}
                        validationStatus={""}
                        validationStatusStyle={styles.validationStatusStyle}
                        itemList={currencyValues || []}
                    />
                </View>
                <TextInput
                    placeholder="Amount"
                    value={amount || ""}
                    onChangeText={(e) => onInputChange('amount', e)}
                    keyboardType={"number-pad"}
                    maxLength={20}
                    style={{ height: 40, color: 'black', borderWidth: 0.5, borderColor: "grey", borderRadius: 5, borderBottomColor: "brown", borderBottomWidth: 3, padding: 10, fontSize: 18, marginVertical: 10 }}
                />
                <TouchableOpacity
                    onPress={() => onSubmit()}
                    activeOpacity={0.8}
                    style={{ alignSelf: "flex-end", marginHorizontal: 20, marginVertical: 20, padding: 10, backgroundColor: 'brown', width: 100, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={{ color: "white" }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
