import { Request } from 'express';
import { TokenUserModel } from '../../users/models/token-user.model';

export interface AuthenticatedRequest extends Request {
  user: TokenUserModel | undefined;
  isLoggedIn: boolean;
}
