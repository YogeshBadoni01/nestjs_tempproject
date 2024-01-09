import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
// import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  controllers: [ProfileController],
  // providers :[JwtStrategy],
})
export class ProfileModule {}
