import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Adrey', email: 'andrey@gmail.com' },
    { id: 2, name: 'Alex', email: 'alex@gmail.com' },
  ];

  getBye(): string {
    return 'Bye!';
  }

  getUsers(): any[] {
    return this.users;
  }
}
