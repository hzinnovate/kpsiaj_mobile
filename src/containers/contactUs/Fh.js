import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



let FhContact = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={{ paddingBottom: 50 }}>
                    <Text style={styles.heading}>
                        FATIMIYAH HOSPITAL
            </Text>
                    <Text style={styles.subHeading}>
                        272/2-3, Britto Rd, Garden East, Soldier Bazar 3, Karachi
            </Text>
                    <View style={styles.touchable}>
                        <Icon name='phone-square' style={styles.icn} />
                        <Text
                            style={styles.txt}
                            onPress={() => {
                                Linking.openURL(`tel:${'+92 21 111012014'}`)
                            }}
                        >
                            +92 21 111012014
            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='facebook-square' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => {
                                Linking.openURL('fb://page/955164577951349');
                            }}
                        >
                            Facebook
                            </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Icon name='globe' style={styles.icn} />
                        <Text style={styles.txt}
                            onPress={() => Linking.openURL('https://www.fh.org.pk')}
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
                                onPress={() => Linking.openURL('mailto:info@fh.org.pk')}
                            >
                                info@fh.org.pk
                        </Text>
                        </Text>
                    </View>
                    <View style={styles.touchable}>
                        <Text style={styles.txP}>
                            {`Careers - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:hr@fh.org.pk')}
                            >
                                hr@fh.org.pk
                        </Text>
                        </Text>
                    </View><View style={styles.touchable}>
                        <Text style={styles.txP}>
                            {`Feedback - `}
                            <Text style={styles.txt}
                                onPress={() => Linking.openURL('mailto:feedback@fh.org.pk')}
                            >
                                feedback@fh.org.pk
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
    txt: { color: 'blue',fontSize: 14, textDecorationLine: 'underline' },
    tx:{fontSize: 14},
    txP:{fontSize: 14 , paddingLeft: 25},
    icn: { fontSize: 14, color: "#725054", paddingRight: 10 },
    touchable: { flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }
})

FhContact = React.memo(FhContact);

export default FhContact