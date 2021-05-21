import { useEffect, useState } from 'react';
import { projectFireStore, projectStorage, timeStamp } from '../Firebase/config';

const useStorage = (file) => {
    const [url, setUrl] = useState();
    const [error, setError] = useState();
    const [progress, setProgress] = useState();

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');
        storageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            console.log(url, createdAt);
            collectionRef.add({url, createdAt });
            setUrl(url);
        })
    }, [file]);

    return {url, error, progress};
};

export default useStorage;