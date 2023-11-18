import { Module } from '@nestjs/common';

// загальна інформація, яка не тягнеться з бази
import { AppController } from './app.controller';
import { AppService } from './app.service';

// те, що з бази
import { TypeOrmModule } from '@nestjs/typeorm'; // для DTO
import { UsersModule } from './users/users.module'; // Users
import { User } from './users/user.entity';
import {UsersController} from "./users/users.controller";
import {UsersService} from "./users/users.service"; // Users

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'users',
      synchronize: true,
      entities: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

