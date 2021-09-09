import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';

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