import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import { TokenUserModel } from '../../users/models/token-user.model';
import { TokenService } from '../services/token.service';

/**
 * This middleware is responsible for decoding and setting the user data on the request object.
 * It is used to set the user data on the request object for all routes that are protected by the AuthGuard.
 *
 * The user and isLoggedIn properties are later used by the AuthGuard to determine if the user is authorized to access a route or not.
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}

  use(req: Request & { user: TokenUserModel; isLoggedIn: boolean }, res: Response, next: NextFunction) {
    const token = req.headers.authorization || req.cookies?.Authorization;

    if (token) {
      const decoded = this.tokenService.verifyToken(token);

      req.user = decoded;
      req.isLoggedIn = !!decoded;
    }

    next();
  }
}
