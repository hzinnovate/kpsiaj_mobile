import React, { useState } from 'react';
import { ObituaryList } from './obituaryList';
import { ObituaryDetail } from './obituaryDetail';
import { SafeAreaView } from 'react-native';

export default ObituaryContainer = () => {
    let [showDetail, setShowDetail] = useState("")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {!!showDetail ?
                <ObituaryDetail showDetail={showDetail} setShowDetail={setShowDetail} />
                :
                <ObituaryList showDetail={showDetail} setShowDetail={setShowDetail} />}
        </SafeAreaView>
    )
}