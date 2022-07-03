import { Router } from 'express';
import UserController from '../controller/UserController';
import UserValidation from '../middlewares/validations/user.validations';

const router = Router();

const controller = new UserController();
const { validateFields, validateEmail } = UserValidation;

router.post('/create', validateFields, validateEmail, controller.create.bind(controller));

export default router;
