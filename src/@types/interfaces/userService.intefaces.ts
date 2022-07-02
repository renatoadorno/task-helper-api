import type ResponseStatus from '../types/responseStatus.types';
import type ParamUser from '../types/paramUser.types';

export default interface IUserService {
  create(user: ParamUser): Promise<ResponseStatus>;
}
