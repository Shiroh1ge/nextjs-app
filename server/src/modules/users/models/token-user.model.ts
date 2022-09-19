import { UserModel } from './user.model';

// We only need the properties that are needed for the token, such as the id and email of the user, so we just pick those
export interface TokenUserModel extends Pick<UserModel, 'id' | 'email'> {
  iat?: number;
  exp?: number;
}
