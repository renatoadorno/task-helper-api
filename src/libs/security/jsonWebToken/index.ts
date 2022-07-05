import * as jwt from 'jsonwebtoken';
import type { User } from '../../../@types/types/user.types';
import jwtConfig from './jwtConfig';

export default class Token {
  public static gen(user: User): string {
    const { secret, expiresIn, algorithm } = jwtConfig;
    return jwt.sign({ data: user }, secret, { expiresIn, algorithm });
  }

  public static verify(token: string): jwt.JwtPayload {
    const { secret } = jwtConfig;
    return jwt.verify(token, secret) as jwt.JwtPayload;
  }
}
