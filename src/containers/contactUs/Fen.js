import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



let FenContact = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={{ paddingBottom: 50 }}>
                    <Text style={styles.heading}>
                        FATIMIYAH EDUCATION NETWORK
            </Text>
                    <Text style={styles.subHeading}>
                        174 - Britto Road,Near Numaish, Karachi
            </Text>
                    <Text style={styles.subHeading}>
                        Phone: {'\n'}
                    FEN Admin, FMS, FBS, FGS, and FIES
            </Text>
            <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text
                            style={styles.txt}
                            onPress={() => {
                                Linking.openURL(`tel:${'+92 21 32254214'}`)
                            }}
                        >
                            +92 21 32254214
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                        onPress={() => {
                            Linking.openURL(`tel:${'‎+92 21 32233278'}`)
                        }}>
                            ‎+92 21 32233278
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                        onPress={() => {
                            Linking.openURL(`tel:${'+92 21 32233273'}`)
                        }}
                        >
                            +92 21 32233273
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                        onPress={() => {
                            Linking.openURL(`tel:${'+92 21 32233274'}`)
                        }}
                       >
                            +92 21 32233274
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                        onPress={() => {
                            Linking.openURL(`tel:${'‎+92 21 32257579'}`)
                        }}
                       >
                            ‎+92 21 32257579
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                        onPress={() => {
                            Linking.openURL(`tel:${'+92 21 32233275'}`)
                        }}
                       >
                            +92 21 32233275
            </Text>
                    </View>
                    <Text style={styles.subHeading}>
                        Fatimiyah College
            </Text>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text
                            style={styles.txt}
                            onPress={() => {
                                Linking.openURL(`tel:${'+92 21 32236704'}`)
                            }}
                        >
                            +92 21 32236704
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL(`tel:${'‎+92 21 32221710'}`)
                            }}>
                            ‎+92 21 32221710
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL(`tel:${'+92 21 32221711'}`)
                            }}
                        >
                            +92 21 32221711
            </Text>
                    </View>
                    <Text style={styles.subHeading}>
                        WhatsApp
            </Text>
                    <View style={styles.touchable}>
                        <Icon name='whatsapp' style={styles.icn} />
                        <Text>
                            {`FEN Admin - `}
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('whatsapp://send?phone=+92 322 2516625')
                            }}
                            >
                            +92 322 2516625
            </Text>
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='whatsapp' style={styles.icn} />
                        <Text>
                            {`FMS - `}
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('whatsapp://send?phone=+92 330 2886810')
                            }}
                            >
                            +92 330 2886810
            </Text>
                            </Text>
                    </View><View style={styles.touchable}>
                        <Icon name='whatsapp' style={styles.icn} />
                        <Text>
                            {`FIES - `}
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('whatsapp://send?phone=+92 332 3067484')
                            }}
                            >
                            +92 332 3067484
            </Text>
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='facebook-square' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('fb://page/303212876473897');
                            }}
                        >
                            Facebook
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='globe' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('http://fen.edu.pk')}
                        >
                            Website
                            </Text>
                    </View>

                    <View style={styles.touchable}>
                        <Icon name='envelope-open' style={styles.icn} />
                        <Text style={styles.tx}>
                            {`General Inquiries - `}
                        <Text
                            style={styles.txt}
                            onPress={() => Linking.openURL('mailto:info@fen.edu.pk')}
                            >
                            info@fen.edu.pk
                        </Text>
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            Fatimiyah Montessori System -
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:fms@fen.edu.pk')}
                            >
                            fms@fen.edu.pk
                        </Text>
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah Boys School - `}
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:fbs@fen.edu.pk')}
                            >
                            fbs@fen.edu.pk
                        </Text>
                            </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah Girls School - `}
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:fgs@fen.edu.pk')}
                            >
                            fgs@fen.edu.pk
                        </Text>
                            </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah College - `}
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:fc@fen.edu.pk')}
                            >
                            fc@fen.edu.pk
                        </Text>
                            </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah institude of Educational Sciences - `}
                        <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:admin@fies.edu.pk')}
                            >
                                admin@fies.edu.pk
                        </Text>
                        </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Careers - `}
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:hrc@fen.edu.pk')}
                            >
                            hrc@fen.edu.pk
                        </Text>
                            </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Feedback - `}
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('mailto:feedback@fen.edu.pk')}
                            >
                            feedback@fen.edu.pk
                        </Text>
                            </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#725054', flex: 1, padding: 10 },
    scroll: { backgroundColor: 'white', elevation: 5, borderRadius: 10, flex: 1, padding: 10, paddingRight: 0 },
    heading: { color: 'black', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    subHeading: { color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5, paddingBottom: 10 },
    txt: { color: 'blue', fontSize: 14, textDecorationLine: 'underline' },
    tx:{fontSize: 14},
    txP:{fontSize: 14 , paddingLeft: 25},
    icn: { fontSize: 14, color: "#725054", paddingRight: 10 },
    touchable: { flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }
})


FenContact = React.memo(FenContact);

export default FenContact