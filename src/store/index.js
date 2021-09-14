import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import thunk from 'redux-thunk';
import { quizReducer, telethonReducer, userReducer, toastReducer, eventAndDeathNewsReducer, generalInfoReducer, feedBackReducer } from './reducers';

//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

let reducer = combineReducers({
        auth: userReducer,
        toast: toastReducer,
        news: eventAndDeathNewsReducer,
        general: generalInfoReducer,
        feedback: feedBackReducer,
        telethon: telethonReducer,
        quiz: quizReducer
})

const persistConfig = { key: 'root', storage: AsyncStorage, }
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {
        store,
        persistor
}



// export default createStore(
//         combineReducers({
//                 consumers: consumerReducer,
//                 auth: userReducer,
//                 places: placesReducer,
//                 experience: experienceReducer,
//                 contributor: contributorReducer,
//                 toast: toastReducer,
//                 event: eventReducer,
//                 chat: chatReducer,
//                 notifications: notificationReducer,
//                 categories: categoriesReducer,
//                 creditCards: creditCardsReducer,
//                 paymentState: paymentReducer,
//                 routingState: routingState,
//                 universal: universalDetailsReducer
//         }),
//         {}, // empty obj for action
//         applyMiddleware(thunk));
