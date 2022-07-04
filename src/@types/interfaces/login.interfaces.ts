import { ParamLogin, ResponseLogin } from '../types/login.types';
import { ResponseError } from '../types/error.types';

export interface ILoginService {
  login(user: ParamLogin): Promise<ResponseLogin | ResponseError>;
}
