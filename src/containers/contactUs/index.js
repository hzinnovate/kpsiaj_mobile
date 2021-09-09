import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import KpsiajContact from './Kpsiaj';
import FenContact from './Fen';
import FhContact from './Fh';
import {downloadAndConnectUsTabsStyles} from '../../config/StylesCss';
import {HeaderDivComp} from '../../components';
export default function ContactUsContainer() {
  const [kpsiajContact, setKpsiajContact] = useState(true);
  const [fenContact, setFenContact] = useState(false);
  const [fhContact, setFhContact] = useState(false);

  function changeTab(tab) {
    switch (tab) {
      case 'kpsiaj':
        setKpsiajContact(true);
        setFenContact(false);
        setFhContact(false);
        break;
      case 'fen':
        setKpsiajContact(false);
        setFenContact(true);
        setFhContact(false);
        break;
      case 'fh':
        setKpsiajContact(false);
        setFenContact(false);
        setFhContact(true);
        break;
      default:
        setKpsiajContact(true);
        setFenContact(false);
        setFhContact(false);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#725054'}}>
      <View>
        <HeaderDivComp heading="Contact Us" />
      </View>
      <View style={[downloadAndConnectUsTabsStyles.container, {marginTop: 50}]}>
        <View style={downloadAndConnectUsTabsStyles.main}>
          <TouchableOpacity
            onPress={() => {
              changeTab('kpsiaj');
            }}
            style={
              kpsiajContact
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>
              KPSIAJ Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeTab('fen');
            }}
            style={
              fenContact
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>FEN Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeTab('fh');
            }}
            style={
              fhContact
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>FH Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={downloadAndConnectUsTabsStyles.main2}>
          {kpsiajContact && <KpsiajContact />}
          {fenContact && <FenContact />}
          {fhContact && <FhContact />}
        </View>
      </View>
    </SafeAreaView>
  );
}
