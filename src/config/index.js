// import axios from "axios";
// import socketIOClient from "socket.io-client";
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import database from '@react-native-firebase/database';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleAuthKey from android/app/google-services.json => 'client'.'outhClient'

// GoogleSignin.configure({
// webClientId: '737695062433-bcg2k0vq5oc8bobvep3uiaqmjj7fleqe.apps.googleusercontent.com',
// offlineAccess: true,
// });
const db = database()

export {
    auth,
    //  GoogleSignin, 
    messaging,
    db
};

// export const auth0Config = {
    //   domain: "dev--008ul.au.auth0.com",
    //   client_id: "QFDGTf8IC5MAnegeOldXcYOEttV4C",
// };
// export const googleMapApi = {
    //   apiKey: "AIA9TbU_0fR49nphxckSqawDZFZVh0-qqN4"
// };
// const ENDPOINT = 'http://192.168.7.113:5000'; //sohaib
// const ENDPOINT = 'http://192.168.7.149:3030'; // Salman bhai
// const ENDPOINT = 'https://vstaging.inquisitives.com';



// const baseURL = `${ENDPOINT}/api/`;

// export const httpRequst = axios.create({
//     baseURL: baseURL
// });

// export const socket = socketIOClient(ENDPOINT);