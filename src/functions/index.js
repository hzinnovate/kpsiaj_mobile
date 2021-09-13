import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import { PermissionsAndroid } from 'react-native'

export const onShare = (file_url, type) => {
    try {
        let imagePath = null;
        RNFetchBlob.config({
            fileCache: true
        })
            .fetch("GET", file_url)
            // the image is now dowloaded to device's storage
            .then(resp => {
                // the image path you can use it directly with Image component
                imagePath = resp.path();
                return resp.readFile("base64");
            })
            .then(async base64Data => {
                var base64Data = `data:${type};base64,` + base64Data;
                // here's base64 encoded image
                await Share.open({ url: base64Data });
                // remove the file from storage
                return RNFetchBlob.fs.unlink(imagePath);
            });
    } catch (error) {
        console.log('eeror', error)
    }
}

export const onShareDeathNews = async (text, fileUrl, imageType) => {
    try {
        let filePath = null;
        if (fileUrl) {
            const configOptions = { fileCache: true };
            let responce = await RNFetchBlob.config(configOptions)
                .fetch('GET', fileUrl)
                .then(resp => {
                    filePath = resp.path();
                    return resp.readFile('base64');
                }).then(base64Data => {
                    return base64Data
                })
            // let data = await `data:${'image/jpeg'};base64,` + responce;
            // console.log('222222222>>>>>>>>>..', data)
            // `data:${'image/jpeg'}/${filePath};base64,${responce}`
            // console.log(filePath)
            let responceFromShare = await Share.open({ message: text, url: `data:${imageType};base64,${responce}`, type: imageType });
            // let responceFromShare = await Share.open({ url: `file://${filePath}`, message: text });
            RNFetchBlob.fs.unlink(filePath);
        } else {
            Share.open({ message: text });
        }
    } catch (error) {
        console.log(error)
        if (error.message === 'Unable to resolve host "firebasestorage.googleapis.com": No address associated with hostname') {
            alert(`Sorry you can't use this option with out internet `)
        }
    }
}

export const onDownloadDeathNews = async (image_URL) => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            'title': 'KPSIAJ App Storage Permission',
            'message': 'KPSIAJ App needs access to your storage to download Photos.'
        }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
            let options = {
                fileCache: true,
                addAndroidDownloads: {
                    notification: true,
                    useDownloadManager: true,
                    title: "Image Downloaded",
                    path: RNFetchBlob.fs.dirs.DownloadDir + "/KPSIAJ/" + new Date().getTime() + '.jpg',
                }
            }
            await RNFetchBlob.config(options).fetch('GET', image_URL).then((res) => {
                // console.log('response', res.data)
            });
        } catch (error) {
            // console.log(error)
        }
    }
    else {

        alert("Storage Permission Not Granted");

    }
}

export const onDownload = async (url, type) => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            'title': 'KPSIAJ App Storage Permission',
            'message': 'KPSIAJ App needs access to your storage to download Photos.'
        }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        let path = ''
        if (type === 'application/pdf') {
            path = RNFetchBlob.fs.dirs.DownloadDir + "/KPSIAJ/" + new Date().getTime() + '.pdf'
        } else if (type === 'video/mp4') {
            path = RNFetchBlob.fs.dirs.DownloadDir + "/KPSIAJ/" + new Date().getTime() + '.mp4'
        } else {
            path = RNFetchBlob.fs.dirs.DownloadDir + "/KPSIAJ/" + new Date().getTime() + '.jpg'
        }
        try {
            let options = {
                fileCache: true,
                addAndroidDownloads: {
                    notification: true,
                    useDownloadManager: true,
                    title: "Downloaded",
                    path: path,
                }
            }
            await RNFetchBlob.config(options).fetch('GET', url).then((res) => {
            });
        } catch (error) {
            // console.log(error)
        }
    }
    else {

        alert("Storage Permission Not Granted");

    }
}