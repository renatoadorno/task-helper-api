import { Router } from 'express';
import TaskController from '../controller/TaskController';
import TasksValidation from '../middlewares/validations/tasks.validations';
import Auth from '../middlewares/auth';

const router = Router();

const controller = new TaskController();
const { createValidation, getValidation } = TasksValidation;

router.post('/', Auth.handle, createValidation, controller.create.bind(controller));
router.get('/', Auth.handle, getValidation, controller.findTasks.bind(controller));
// router.delete('/');
// router.patch('/');

export default router;
