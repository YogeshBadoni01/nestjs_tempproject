import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { BookService } from './book.service';
// import { BookModule } from './book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
// import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  controllers: [ProfileController],
  providers :[BookService],
})
export class ProfileModule {}
