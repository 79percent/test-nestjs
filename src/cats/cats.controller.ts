import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class PageQuery {
  @ApiProperty()
  current?: number;
  @ApiProperty()
  pageSize?: number;
}

export class CreateCatDto {
  @ApiProperty()
  readonly name?: string;
  @ApiProperty()
  readonly age?: number;
}

export class DetailParams {
  @ApiProperty()
  id?: string;
}

export type DataItem = {
  name?: string;
  age?: number;
  id?: number;
};

@Controller('cats')
export class CatsController {
  data: DataItem[];

  constructor() {
    this.data = [];
  }

  /**
   * 列表
   * @param query
   * @returns
   */
  @Get('list')
  list(@Query() query: PageQuery) {
    console.log(query);
    return {
      code: 200,
      data: this.data,
      msg: '获取列表成功',
    };
  }

  /**
   * 添加
   * @param createCatDto
   * @returns
   */
  @Post('create')
  async create(@Body() createCatDto: CreateCatDto) {
    const lastId = this.data[this.data.length - 1]?.id ?? -1;
    const item = {
      ...createCatDto,
      id: lastId + 1,
    };
    this.data.push(item);
    return {
      code: 200,
      data: item,
      msg: '创建成功',
    };
  }

  /**
   * 根据id获取详情
   * @param params
   * @returns
   */
  @Get('detail')
  detail(@Query() query: DetailParams) {
    console.log('detail', query);
    const { id } = query;
    const item = this.data.find((item) => item.id === Number(id));
    return {
      code: 200,
      data: item,
      msg: '获取详情成功',
    };
  }

  @Get('testRedirect')
  @Redirect('https://baidu.com', 301)
  testRedirect(): any {
    return {
      url: 'https://juejin.cn/', // 优先级高于上面的
    };
  }

  @Get('testHttpCode')
  @HttpCode(500)
  testHttpCode(): any {
    // 返回指定http 状态码
    return 'error code: 500';
  }

  @Get('testHeader')
  @Header('Cache-Control', 'none')
  testHeader(): any {
    // 返回指定响应头
    return 'Cache-Control: none';
  }

  @Get('testPromise')
  async testPromise(): Promise<any[]> {
    return [];
  }
}
