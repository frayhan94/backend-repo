import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming "Bearer <token>"

    if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return; // Return void here to avoid falling through
    }

    try {
        // Token validation logic goes here
        console.log('Valid token:', token);
        next(); // Call next() to proceed
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
