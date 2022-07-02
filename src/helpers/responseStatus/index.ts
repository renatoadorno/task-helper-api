import type ResponseStatus from '../../@types/types/responseStatus.types';

const ok = (response: object): ResponseStatus => {
  const code = 200;
  return { statusCode: code, body: response };
};

const created = (response: object): ResponseStatus => {
  const code = 201;
  return { statusCode: code, body: response };
};

const badRequest = (response: object): ResponseStatus => {
  const code = 400;
  return { statusCode: code, body: response };
};

const unauthorized = (response: object): ResponseStatus => {
  const code = 401;
  return { statusCode: code, body: response };
};

const notFound = (response: object): ResponseStatus => {
  const code = 404;
  return { statusCode: code, body: response };
};

const Http = {
  ok,
  created,
  badRequest,
  unauthorized,
  notFound,
};

export default Http;
