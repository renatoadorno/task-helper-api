import { LoginUser } from '../../@types/types/login.types';

export default class LoginRes {
  public static ok({
    id, name, email, token,
  }: LoginUser) {
    const code = 200;
    return {
      statusCode: code,
      body: {
        id, name, email, token,
      },
    };
  }

  public static create({
    id, name, email, token,
  }: LoginUser) {
    const code = 201;
    return {
      statusCode: code,
      body: {
        id, name, email, token,
      },
    };
  }
}

// const ok = ({
//   id,
//   name,
//   email,
//   password,
// }: User): ResponseUser => {
//   const code = 200;
//   return {
//     statusCode: code,
//     body: {
//       id,
//       name,
//       email,
//       password,
//     },
//   };
// };

// const create = ({
//   id,
//   name,
//   email,
//   password,
// }: User): ResponseUser => {
//   const code = 201;
//   return {
//     statusCode: code,
//     body: {
//       id,
//       name,
//       email,
//       password,
//     },
//   };
// };

// const badRequest = ({
//   id,
//   name,
//   email,
//   password,
// }: User): ResponseUser => {
//   const code = 400;
//   return {
//     statusCode: code,
//     body: {
//       id,
//       name,
//       email,
//       password,
//     },
//   };
// };

// const unauthorized = ({
//   id,
//   name,
//   email,
//   password,
// }: User): ResponseUser => {
//   const code = 401;
//   return {
//     statusCode: code,
//     body: {
//       id,
//       name,
//       email,
//       password,
//     },
//   };
// };
// const notFound = ({
//   id,
//   name,
//   email,
//   password,
// }: User): ResponseUser => {
//   const code = 404;
//   return {
//     statusCode: code,
//     body: {
//       id,
//       name,
//       email,
//       password,
//     },
//   };
// };

// const response = {
//   ok,
//   create,
//   badRequest,
//   unauthorized,
//   notFound,
// };

// export default response;
