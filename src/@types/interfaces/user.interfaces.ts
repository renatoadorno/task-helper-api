import { ResponseUserMsg, ParamUser } from '../types/user.types';

export default interface IUserService {
  create(user: ParamUser): Promise<ResponseUserMsg>;
}
