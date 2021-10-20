import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

interface IPayLoad {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({ 
      errorCode: "token.invalid",
    })
  }

  // Bearer 89134979jkfkijhi42141hjihj
  // [0] Bearer
  // [1] 89134979jkfkijhi42141hjihj

  const [, token] = authToken.split(" ")

  try { 
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayLoad

    request.user_id = sub

    return next();
  } catch (err) {
    return response.status(401).json({ errorCode: "token.expired" })
  }

}