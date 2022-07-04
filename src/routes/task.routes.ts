import { Router } from 'express';
import TaskController from '../controller/TaskController';
import TasksValidation from '../middlewares/validations/tasks.validations';
import Auth from '../middlewares/auth';

const router = Router();

const controller = new TaskController();
const { validateFields } = TasksValidation;

router.post('/', Auth.handle, validateFields, controller.create.bind(controller));
// router.delete('/');
// router.patch('/');

export default router;
