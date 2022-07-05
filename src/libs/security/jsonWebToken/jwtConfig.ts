import { readFileSync } from 'fs';
import * as jwt from 'jsonwebtoken';

type JwtTypes = {
  secret: jwt.Secret;
  expiresIn: jwt.SignOptions['expiresIn'];
  algorithm: jwt.Algorithm;
};

const jwtConfig: JwtTypes = {
  secret: readFileSync('jwt.evaluation.key', 'utf8'),
  expiresIn: '1d',
  algorithm: 'HS256',
};

export default jwtConfig;
