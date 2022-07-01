import { Router } from 'express';
import userRoute from './user.routes';

const routes = Router();

routes.use('/user', userRoute);

export default routes;
