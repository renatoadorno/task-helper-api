import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

const controller = new UserController();

router.post('/', controller.create.bind(controller));

export default router;
