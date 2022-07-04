export type LoginUser = {
  id: string
  email: string
  name: string
  token: string
};

export type ResponseLogin = {
  statusCode: number,
  body: LoginUser
};

export type ParamLogin = {
  email: string,
  password: string
};
