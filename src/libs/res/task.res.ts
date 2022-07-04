import { Task } from '../../@types/types/task.types';

export default class TaskRes {
  public static ok(tasks: Task[]) {
    const code = 200;
    return {
      statusCode: code,
      body: tasks,
    };
  }

  public static updateOk(task: Task) {
    const code = 200;
    return {
      statusCode: code,
      body: task,
    };
  }

  public static create(task: Task) {
    const code = 201;
    return {
      statusCode: code,
      body: task,
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
