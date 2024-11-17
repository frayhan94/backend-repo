import { Router } from 'express';
import { getUserData, updateUser,addUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/fetch-user-data', authMiddleware, getUserData);
router.post('/update-user-data', authMiddleware, updateUser);
router.post('/create-user', authMiddleware,addUser);

export default router;
