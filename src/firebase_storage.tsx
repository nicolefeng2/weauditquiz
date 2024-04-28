import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase_config';

interface Response {
    'free-response': string;
    'rating-value': number;
    'timestamp': Date;
}

// change name to firebase_logging
async function firebase_storage (response: Response) {
    const data = { 'free-response': response['free-response'], 'rating-value': response['rating-value'], 'timestamp': response['timestamp'] };
    console.log(data);
    try {
        const docRef = await addDoc(collection(firestore, 'response'), response);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error writing document: ", e);
    }
};

export default firebase_storage;