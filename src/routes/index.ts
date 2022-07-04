import { Router } from 'express';
import userRoute from './user.routes';
import loginRoutes from './login.routes';

const routes = Router();

routes.use('/user', userRoute);
routes.use('/login', loginRoutes);

export default routes;
