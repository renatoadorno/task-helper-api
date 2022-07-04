import { Router } from 'express';
import LoginController from '../controller/LoginController';
import LoginValidation from '../middlewares/validations/login.validations';

const router = Router();

const controller = new LoginController();
const { validateFields } = LoginValidation;

router.post('/', validateFields, controller.login.bind(controller));

export default router;
