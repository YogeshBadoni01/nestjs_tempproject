import { Logger, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
// import { UserModule } from 'src/user/dto/userModule.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/userModule.module';
import { BookModule } from 'src/book/book.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './auth.constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
    controllers : [AuthController],
    imports : [UserModule,BookModule,PassportModule,
        JwtModule.register({
        global:true,
        secret:jwtConstant.secret,
        signOptions:{expiresIn: "60s" },
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
    
}
