import React, {createRef} from 'react';
import {
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  View,
} from 'react-native';
import {
  HeaderDivComp,
  RenderWebViewComponent,
  RenderHTMLComponent,
} from '../../components';
import {useSelector} from 'react-redux';

export default RenderHTMLContainer = props => {
    let header = '';
    let htmlData = '';
    let link = '';
  // let web = createRef()
  const {width} = useWindowDimensions();
  let {route} = props;
  if (route && route.params) {
    let obj = route.params;
    if (obj.link) {
      link = obj.link;
    }
    if (obj.htmlData) {
      htmlData = obj.htmlData;
    }
    if (obj.name) {
      if (obj.name === 'aboutUs') {
        let aboutUs = useSelector(({general}) => general.aboutUs);
        htmlData = aboutUs.text;
      }
      if (obj.name === 'donateUs') {
        let donateUs = useSelector(({general}) => general.donateUs);
        htmlData = donateUs.text;
      }
    }
    if (obj.header) {
      header = obj.header;
    }

    // obj.isEventHtml
  }
  // const errorHandling = (error) => {
  //     if (error.nativeEvent.description === 'net::ERR_FAILED') {
  //         web.reload()
  //     }
  // }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#725054'}}>
      <View style={{flex: 1}}>
        <HeaderDivComp heading={header} />
        {!!htmlData && (
          <View
            style={{
              flex: 1,
              marginTop: 60,
              margin: 10,
              backgroundColor: '#ECEAE4',
              padding: 10,
              borderRadius: 10,
            }}>
            <ScrollView>
              <RenderHTMLComponent htmlData={htmlData} />
            </ScrollView>
          </View>
        )}
        {!!link && <RenderWebViewComponent link={link} />}
      </View>
    </SafeAreaView>
  );
};
