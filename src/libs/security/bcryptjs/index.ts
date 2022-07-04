import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

export default class HashPassword {
  public static gen(numSalt: number, password: string): string {
    const salt = genSaltSync(numSalt);
    const hashPassword = hashSync(password, salt);
    return hashPassword;
  }

  public static verify(password: string, userPassword: string): boolean {
    const auth = compareSync(password, userPassword);
    return auth;
  }
}
