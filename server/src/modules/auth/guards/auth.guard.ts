import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthenticatedRequest } from '../interfaces/authenticated-request';

/***
 * A guard that checks if the request is authenticated. Can be used on routes or controllers.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: AuthenticatedRequest = context.switchToHttp().getRequest();

    return request.isLoggedIn;
  }
}
