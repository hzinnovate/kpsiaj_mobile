import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



let KpsiajContact = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={{ paddingBottom: 50 }}>
                    <Text style={styles.heading}>
                        THE KHOJA (PIRHAI) SHIA ISNA ASHERI JAMAAT
            </Text>
                    <Text style={styles.subHeading}>
                        Khoja Jamaat Complex
                    {'\n\n'}
                    174 - Britto Road,Near Old Numaish,
                    {'\n'}
                    Soldier Bazaar, Karachi-74800 (Pakistan)
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
                    <View style={styles.touchable}>
                        <Icon name='whatsapp' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('whatsapp://send?phone=+92 334 3913770')
                            }}
                        >
                            +92 334 3913770
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='facebook-square' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('fb://page/254059321457936');
                            }}
                        >
                            Facebook
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='globe' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('https://kpsiaj.org/')}
                        >
                            Website
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='youtube' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('vnd.youtube://www.youtube.com/channel/UCdft3Z35RG2U2VoJo7HHXIw');
                            }}
                        >
                            Youtube
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='envelope-open' style={styles.icn} />
                        <Text style={styles.tx}>
                            {`General Queries - `}
                            <Text
                                style={styles.txt}
                                onPress={() => Linking.openURL('mailto:secretariat@kpsiaj.org')}
                            >
                                secretariat@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Hon. Secretary - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:secretary@kpsiaj.org')}
                            >
                                secretary@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Chief Operating Officer - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:coo@kpsiaj.org')}
                            >
                                coo@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Family Relations Committee - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:frc@kpsiaj.org')}
                            >
                                frc@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah Sports Complex - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:fsc@kpsiaj.org')}
                            >
                                fsc@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`KPSIAJ Women Wing - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:womenwing@kpsiaj.org')}
                            >
                                womenwing@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Jobs and Recruitment - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:hrc@kpsiaj.org')}
                            >
                                hrc@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Fatimiyah Community Center - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:fcc@kpsiaj.org')}
                            >
                                fcc@kpsiaj.org
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP} >
                            {`Feedback - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:feedback@kpsiaj.org')}
                            >
                                feedback@kpsiaj.org
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
    tx: { fontSize: 14 },
    txP: { fontSize: 14, paddingLeft: 25 },
    icn: { fontSize: 14, color: "#725054", paddingRight: 10 },
    touchable: { flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }
})


KpsiajContact = React.memo(KpsiajContact);

export default KpsiajContact