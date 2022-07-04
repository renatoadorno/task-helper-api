import { ErrMessage, ResponseError } from '../../@types/types/error.types';

const badRequest = ({ message }: ErrMessage): ResponseError => {
  const code = 400;
  return { statusCode: code, body: { message } };
};

const unauthorized = (message: ErrMessage): ResponseError => {
  const code = 401;
  return { statusCode: code, body: message };
};

const notFound = ({ message }: ErrMessage): ResponseError => {
  const code = 404;
  return { statusCode: code, body: { message } };
};

const Error = {
  badRequest,
  unauthorized,
  notFound,
};

export default Error;
