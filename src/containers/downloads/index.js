import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Constitution from './Constitution';
import {downloadAndConnectUsTabsStyles} from '../../config/StylesCss';
import {HeaderDivComp, RenderWebViewComponent} from '../../components';

export default function DownloadsContainer() {
  const [newsletter, setNewsletter] = useState(true);
  const [forms, setForms] = useState(false);
  const [constitution, setConstitution] = useState(false);

  function changeTab(tab) {
    switch (tab) {
      case 'newsletter':
        setNewsletter(true);
        setForms(false);
        setConstitution(false);
        break;
      case 'forms':
        setNewsletter(false);
        setForms(true);
        setConstitution(false);
        break;
      case 'constitution':
        setNewsletter(false);
        setForms(false);
        setConstitution(true);
        break;
      default:
        setNewsletter(true);
        setForms(false);
        setConstitution(false);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#725054'}}>
      <View>
        <HeaderDivComp heading="Downloads" />
      </View>
      <View style={[downloadAndConnectUsTabsStyles.container, {marginTop: 50}]}>
        <View style={downloadAndConnectUsTabsStyles.main}>
          <TouchableOpacity
            onPress={() => {
              changeTab('newsletter');
            }}
            style={
              newsletter
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>Newsletter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeTab('forms');
            }}
            style={
              forms
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>Forms</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeTab('constitution');
            }}
            style={
              constitution
                ? downloadAndConnectUsTabsStyles.activeTab
                : downloadAndConnectUsTabsStyles.tab
            }>
            <Text style={downloadAndConnectUsTabsStyles.text}>
              Constitution
            </Text>
          </TouchableOpacity>
        </View>
        <View style={downloadAndConnectUsTabsStyles.main2}>
          {newsletter && (
            <RenderWebViewComponent link="https://appweb.kpsiaj.org/NewsLetterContainer" />
          )}
          {forms && (
            <RenderWebViewComponent link="https://appweb.kpsiaj.org/FormsContainer" />
          )}
          {constitution && <Constitution />}
        </View>
      </View>
    </SafeAreaView>
  );
}
