export type User = { // -> É possivel utilizar este type direto do ORM Prisma, porém preferi ter
  // o type desvinculado do ORM, assim fica mais facil de fazer a troca de DB ou ORM futuramente.
  id: string
  email: string
  name: string
  password: string
};

export type ParamUser = {
  name: string,
  email: string,
  password: string
};

export type ResponseUser = {
  statusCode: number,
  body: User
};

export type MessageSucess = {
  message: string,
};

export type ResponseUserMsg = {
  statusCode: number,
  body: MessageSucess
};
