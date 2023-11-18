import {Injectable} from '@nestjs/common';

// сервіс треба, щоб ініціалізувати дані (статичні)
// частіше отримати дані з бази, з допомогою вбудованих методів typeorm взяти всі дані чи для одного юзера чи для сторінки з 10 елементів

@Injectable()
export class AppService {
  private cats: { name: string }[] = [
    {name: 'aaa'},
    {name: 'bbb'},
    {name: 'ccc'}
  ];

  getHello(): string {
    return 'Hello World!';
  }
  getBye(): string {
    return 'Bye!';
  }
  getCats(name?: string ): { name: string }[] {
    if (name) {
      return this.cats.filter(item => item.name === name);
    }
    return this.cats;
  }

  getCat(name: string): { name: string } {
    // console.log('name: ', name);
    return this.cats.filter(item => item.name === name)[0];
  }

  addCat(cat: { name: string }): { name: string }[] {
    this.cats.push(cat)
    return this.cats;
  }
}
