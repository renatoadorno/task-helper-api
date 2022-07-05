import HashPassword from '../libs/security/bcryptjs';
import UserModel from '../models/UserModel';
import { ParamUser } from '../@types/types/user.types';
import UserRes from '../libs/res/user.res';
import IUserService from '../@types/interfaces/user.interfaces';

export default class UserService implements IUserService {
  private userModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async create({ name, email, password }: ParamUser) {
    const newHash = HashPassword.gen(5, password);

    const newUser = await this.userModel.create(name, email, newHash);

    return UserRes.create(newUser);
  }
}
