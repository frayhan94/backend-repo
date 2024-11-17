import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

const USERS_COLLECTION = 'users';

export const fetchUserData = async (): Promise<User[]> => {
    const snapshot = await db.collection(USERS_COLLECTION).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
};

export const updateUserData = async (userId: string, userData: Partial<User>): Promise<void> => {
    await db.collection(USERS_COLLECTION).doc(userId).update(userData);
};

export const createUser = async (userData: { name: string; email: string; age: number }): Promise<void> => {
    try {
        // Automatically generate a unique document ID
        const newUserRef = db.collection('users').doc();
        await newUserRef.set(userData); // Save user data
        console.log(`User created with ID: ${newUserRef.id}`);
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
};
