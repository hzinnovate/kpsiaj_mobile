import React, { useCallback, useState } from 'react';
import { HeaderDivComp } from '../headerDivComp';
import { SafeAreaView, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInWithPhoneNumber, verifyNumber, setToast } from "../../store/actions";

export default AuthenticationComponent = () => {
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(null);
    const [number, setNumber] = useState("");
    const [code, setCode] = useState("");

    const onSubmitNumber = () => {
        console.log('numnber')
        if (!number) {
            dispatch(setToast("error", "Provide Phone Number"))
            return;
        }
        dispatch(signInWithPhoneNumber(number, setConfirm))
    }
    const confirmNumber = () => {
        if (!code) {
            dispatch(setToast("error", "Provide Code for Verification"))
            return;
        }
        dispatch(verifyNumber(code,confirm, setConfirm))
    }
    const renderButton = () => {
        if (!confirm) {
            return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ color: '#725054', fontWeight: 'bold', fontSize: 18, padding: 20, textAlign: 'center', marginBottom: 5, marginTop: 25 }} >
                        Please enter your mobile number
                    </Text>
                    <TextInput
                        keyboardType='phone-pad'
                        style={{ textAlign: 'center', borderWidth: 0.5, width: '90%', borderBottomWidth: 4, borderBottomColor: '#725054', height: 40, padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 20, fontSize: 18, elevation: 5 }}
                        placeholder={'eg: +92 334 3913770'}
                        value={number} onChangeText={text => setNumber(text)} />

                    <TouchableOpacity
                        onPress={() => onSubmitNumber()}
                        style={{ margin: 5, backgroundColor: '#725054', height: 40, width: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text
                        style={{ color: '#725054', fontWeight: 'bold', fontSize: 18, padding: 20, textAlign: 'center', marginBottom: 25, marginTop: 25 }} >
                        A verification code has been sent via SMS on {number}
                    </Text>
                    <TextInput
                        keyboardType='phone-pad'

                        style={{ textAlign: 'center', borderWidth: 0.5, width: '90%', borderBottomWidth: 4, borderBottomColor: '#725054', height: 40, padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: 20, fontSize: 18, elevation: 5 }}
                        placeholder={'######'}
                        value={code} onChangeText={text => setCode(text)} />
                    <TouchableOpacity
                        onPress={() => confirmNumber()}
                        style={{ margin: 5, backgroundColor: '#725054', height: 40, width: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor: "#725054"}}>
            <View style={{flex: 1, backgroundColor: "white"}}>
            <HeaderDivComp heading={"Phone Authentication"} />
            <KeyboardAvoidingView style={{ marginTop: 50, padding: 10 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                        <View style={{ alignItems: 'center', paddingBottom: 40 }}>
                            <Image source={require('../../assets/logo.webp')} style={{ height: 120, width: 120, marginTop: 20 }} />
                            {renderButton()}
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}