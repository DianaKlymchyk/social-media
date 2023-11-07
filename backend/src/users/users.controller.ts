import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// http://localhost:5000/users

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // getUsers щоб він повертав юзерів з бази

  @Get()
  getUsers(): any[] {
    return this.usersService.getUsers();
  }
}