import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private  logger = new Logger('LocalStrategy')
  constructor(private authService: AuthService) {
    super({usernameField:'email'});
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.userValidation(email, password);
    // const user = await this.authService.validateUser(email, password);
    if (!user) {
      this.logger.log(`unauthrizedError is ${user}`)
      throw new UnauthorizedException();
    }
    return user;
  }
}