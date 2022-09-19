import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenUserModel } from '../../users/models/token-user.model';

const DEFAULT_ACCESS_TOKEN_EXPIRATION_SECONDS =
  Number(process.env.DEFAULT_ACCESS_TOKEN_EXPIRATION_SECONDS) || 60 * 60 * 24 * 30; // 30 days
const DEFAULT_REFRESH_TOKEN_EXPIRATION_SECONDS =
  Number(process.env.DEFAULT_REFRESH_TOKEN_EXPIRATION_SECONDS) || 60 * 60 * 24 * 30; // 30 days

/**
 * This service is responsible for creating, decoding and validating JWT tokens used for authentication / authorization.
 */
@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  public createToken(payload: TokenUserModel): string {
    try {
      return this.jwtService.sign(payload, {
        expiresIn: DEFAULT_ACCESS_TOKEN_EXPIRATION_SECONDS,
      });
    } catch (error) {
      console.error('Error signing JWT token:', error);
      throw error;
    }
  }

  public decodeToken(token: string) {
    let result = null;

    try {
      const tokenData = this.jwtService.decode(token) as TokenUserModel;

      return tokenData;
    } catch (e) {
      result = null;
    }

    return result;
  }

  public verifyToken(token: string) {
    return this.jwtService.verify(token);
  }

  public hasTokenExpired(token: string) {
    const decoded = this.jwtService.decode(token) as TokenUserModel;
    const now = Date.now() / 1000;

    return decoded.exp! < now;
  }
}
