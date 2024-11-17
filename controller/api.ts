import { Request, Response } from 'express';
import { fetchUserData, updateUserData,createUser } from '../repository/userCollection';

export const getUserData = async (req: Request, res: Response) => {
    try {
        const users = await fetchUserData();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id, ...userData } = req.body;
        await updateUserData(id, userData);
        res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user data', error });
    }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || age === undefined) {
            res.status(400).json({ message: 'Missing required fields: name, email, age' });
            return;
        }

        await createUser({ name, email, age });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user',  error });
    }
};
