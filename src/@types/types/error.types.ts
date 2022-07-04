export type ErrMessage = {
  message: string
};

export type ResponseError = {
  statusCode: number,
  body: ErrMessage
};
