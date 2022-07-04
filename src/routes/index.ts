import { Router } from 'express';
import userRoute from './user.routes';
import loginRoutes from './login.routes';
import taskRoutes from './task.routes';

const routes = Router();

routes.use('/user', userRoute);
routes.use('/login', loginRoutes);
routes.use('/task', taskRoutes);

export default routes;
