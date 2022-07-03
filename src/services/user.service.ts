import { genSaltSync, hashSync } from 'bcryptjs';
import UserModel from '../models/UserModel';
import { ParamUser } from '../@types/types/user.types';
import Response from '../utils/responses/user.responses';
import IUserService from '../@types/interfaces/user.interfaces';

export default class UserService implements IUserService {
  private userModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async create({ name, email, password }: ParamUser) {
    const salt = genSaltSync(5);

    const hashPassword = hashSync(password, salt);

    const newUser = await this.userModel.create(name, email, hashPassword);

    return Response.create(newUser);
  }
}
