import admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
export {
    db
}
