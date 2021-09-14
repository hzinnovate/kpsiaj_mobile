import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { downloadAndConnectUsTabsStyles } from '../../config/StylesCss';
import { HeaderDivComp, RenderWebViewComponent } from '../';
import { TelethonForm } from "./telethonForm";

export default function TelethonComponent(props) {
    const [tabName, setTabName] = useState("Pledge"); // "Pledge" , "Details"

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#725054' }}>
            <View>
                <HeaderDivComp heading="Telethon" />
            </View>
            <View style={[downloadAndConnectUsTabsStyles.container, { marginTop: 50 }]}>
                <View style={downloadAndConnectUsTabsStyles.main}>
                    <TouchableOpacity
                        onPress={() => {
                            setTabName('Pledge');
                        }}
                        style={
                            !!(tabName === "Pledge")
                                ? downloadAndConnectUsTabsStyles.activeTab
                                : downloadAndConnectUsTabsStyles.tab
                        }>
                        <Text style={downloadAndConnectUsTabsStyles.text}>Pledge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setTabName('Details');
                        }}
                        style={
                            !!(tabName === "Details")
                                ? downloadAndConnectUsTabsStyles.activeTab
                                : downloadAndConnectUsTabsStyles.tab
                        }>
                        <Text style={downloadAndConnectUsTabsStyles.text}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={downloadAndConnectUsTabsStyles.main2}>
                    {!!(tabName === "Pledge") && (
                        <TelethonForm {...props} />
                    )}
                    {!!(tabName === "Details") && (
                        <RenderWebViewComponent link="https://appweb.kpsiaj.org/TelethoneDetailsContainer" />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}
