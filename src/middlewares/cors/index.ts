import { NextFunction, Request, Response } from 'express';

const Cors = (_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

export default Cors;
