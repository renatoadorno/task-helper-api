import HashPassword from '../libs/security/bcryptjs';
import UserModel from '../models/UserModel';
import { ParamLogin } from '../@types/types/login.types';
import { ILoginService } from '../@types/interfaces/login.interfaces';
import LoginRes from '../libs/res/login.res';
import ErrorRes from '../libs/res/error.res';
import Token from '../libs/security/jsonWebToken';

export default class LoginService implements ILoginService {
  private userModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async login({ email, password }: ParamLogin) {
    const user = await this.userModel.findByEmail(email);

    if (!user) return ErrorRes.unauthorized({ message: 'Incorrect email or password' });

    const verifyHash = HashPassword.verify(password, user.password);

    if (!verifyHash) return ErrorRes.unauthorized({ message: 'Incorrect email or password' });

    const newToken = Token.gen(user);

    return LoginRes.ok({
      id: user.id,
      email: user.email,
      name: user.name,
      token: newToken,
    });
  }
}
