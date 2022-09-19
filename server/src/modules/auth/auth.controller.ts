import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { TokenService } from './services/token.service';
import { AuthenticatedRequest } from './interfaces/authenticated-request';
import { UserModel } from '../users/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(
    // private usersService: UsersService,
    private tokenService: TokenService,
  ) {}

  // pseudo code for creating a user auth token
  private async createUserAuthToken(user: UserModel): Promise<string> {
    // const tokenUser: TokenUserModel = getTokenUser(user);
    //
    // const authToken = this.tokenService.createToken(tokenUser);
    //
    // return authToken;

    return '';
  }

  // pseudo code for creating a user, setting the auth token on a cookie and returning the user
  @Post('signup')
  public async signupUser(@Body() body: UserModel): Promise<{ user: UserModel; authToken: string }> {
    // const existingUser = await this.usersService.findOne({
    //   email: body.email,
    // });
    //
    // if (existingUser) {
    //   throw new ConflictException('User exists');
    // }
    //
    // const model = await this.usersService.create(body);
    //
    // const authToken = await this.createUserAuthToken(model);
    // res.setCookie('Authorization', authToken)
    //
    return {} as any;
  }

  // here we login the user by email or username, compare the password with bcrypt against the database entry
  @Post('login')
  public async loginUser(
    @Body() body: { credentials: string; password: string },
    @Res() res: Response,
  ): Promise<{ user: UserModel; authToken: string }> {
    // if the user is not found or the password is incorrect, throw a ForbiddenException
    //
    // const model = await this.usersService.findOne({
    //   email: body.email,
    // });
    //
    // if (!model) {
    //   throw new NotFoundException('Wrong username or password.');
    // }
    //
    // if (!(await model.compareEncryptedPassword(body.password))) {
    //   throw new NotFoundException('Wrong username or password.');
    // }
    //
    // const authToken = await this.createUserAuthToken(model);
    // res.setCookie('Authorization', authToken)

    // return {
    //   authToken,
    //   user,
    // };

    return {} as any;
  }

  // here we clear the auth token cookie and let the frontend handle the redirect and clearing of the local storage
  @Post('/logout')
  public async logoutUser(@Req() request: AuthenticatedRequest, @Res() res): Promise<any> {
    // res.clearCookie('Authorization');

    return {
      message: 'success',
      errors: null,
      data: null,
    };
  }
}
