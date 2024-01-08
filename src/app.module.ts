import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
// import { UserController } from './user/dto/user.controller';
// import { userServices } from './user/dto/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/userModule.module';
import { User } from './user/entity/user.entity';
import { Book } from './book/entities/book.entity';
import { ProfileModule } from './profile/profile.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'book',
      entities: [User,Book],
      synchronize: true,
    }),
    AuthModule,
    BookModule,
    ProfileModule,
  ],
  // controllers: [AuthController],
  providers: [],
})
export class AppModule {}
