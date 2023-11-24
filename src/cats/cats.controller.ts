import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  list: any[];

  constructor() {
    this.list = [];
  }

  @Get()
  findAll(): any {
    return {
      code: 200,
      data: this.list,
      msg: '获取成功',
    };
  }

  @Post()
  create() {
    this.list.push(1);
    return {
      code: 200,
      data: null,
      msg: '创建成功',
    };
  }
}
