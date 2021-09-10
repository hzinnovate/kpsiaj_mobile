import React, { useState } from 'react';
import { EventList } from './eventList';
import { EventDetail } from './eventDetail';
import { SafeAreaView } from 'react-native';

export default NewsEventsContainer = () => {
    let [showDetail, setShowDetail] = useState("")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {!!showDetail ?
                <EventDetail showDetail={showDetail} setShowDetail={setShowDetail} />
                :
                <EventList showDetail={showDetail} setShowDetail={setShowDetail} />}
        </SafeAreaView>
    )
}