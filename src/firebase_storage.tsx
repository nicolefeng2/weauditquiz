import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase_config';


async function firebase_storage (response:any) {
  try {
    const docRef = await addDoc(collection(firestore, 'responses'), response);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error writing document: ", e);
  }
};

export default firebase_storage;