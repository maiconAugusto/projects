import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ data: 'Token Inválido' });
  }
  const [, token] = authHeader.split(' ');
  try {
    await promisify(jwt.verify)(token, process.env.HASH, { expiresIn: process.env.EXPIRE });
    return next();
  } catch (error) {
    return response.status(401).json({ data: 'Token Inválido' });
  }
};