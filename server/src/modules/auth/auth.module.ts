import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './services/token.service';
import { JWTSecretKey } from './secret';
import { AuthMiddleware } from './middleware/auth.middleweare';

@Module({
  imports: [
    JwtModule.register({
      secret: JWTSecretKey,
    }),
  ],
  controllers: [AuthController],
  providers: [TokenService],
  exports: [JwtModule, TokenService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
