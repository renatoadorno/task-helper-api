import UserModel from '../models/UserModel';
import Http from '../helpers/responseStatus';
import ParamUser from '../@types/types/paramUser.types';
import IUserService from '../@types/interfaces/userService.intefaces';

// import { compareSync } from 'bcryptjs';
// import Token from '../utils/token';
// import type { ILoginService } from '../interfaces';

export default class UserService implements IUserService {
  private userModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async create({ name, email, password }: ParamUser) {
    const emailExists = await this.userModel.findByEmail(email);

    if (emailExists) return Http.unauthorized({ message: 'este usuario já esta cadastrado' });

    const newUser = await this.userModel.create(name, email, password);

    return Http.created(newUser);
  }
}
