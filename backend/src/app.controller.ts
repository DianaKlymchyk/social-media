import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // localhost:5000
  @Get('/') /// '/' = localhost:5000
  getHello(): string {
    return this.appService.getHello();
  }

  // localhost:5000/cats
  @Get('/cats') // '/cats' = localhost:5000/cats
  getAll(@Query() allQueryParams: { name?: string }) {
    // allQueryParams: name, age  localhost:4000/cats?name=aaa&age=1
    if (allQueryParams?.name) {
      return this.appService.getCats(allQueryParams.name);
    }
    return this.appService.getCats();
  }

  @Post('/cats') // '/cats' = localhost:5000/cats
  create(@Body() newCat: { name: string }) {
    // postCats(item: string): string[] {
    return this.appService.addCat(newCat);
  }

  @Get('/cats/:name')
  getOneByName(@Param('name') name: string) {
    return this.appService.getCat(name);
  }

}