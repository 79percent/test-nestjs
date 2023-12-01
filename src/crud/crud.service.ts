import { Injectable } from '@nestjs/common';
import { CreateDtoWidthId } from './interfaces/crud.interface';
import { PageQuery } from './dto/crud.list.dto';
import { CreateDto } from './dto/crud.create.dto';
import { UpdateDto } from './dto/crud.update.dto';

@Injectable()
export class CrudService {
  private readonly data: CreateDtoWidthId[] = [];

  list(pageQuery: PageQuery) {
    console.log(pageQuery);
    return {
      code: 200,
      data: { ...pageQuery, list: this.data },
      msg: '获取成功',
    };
  }

  create(data: CreateDto) {
    return {
      code: 200,
      data,
      msg: '创建成功',
    };
  }

  detail(id: string) {
    return {
      code: 200,
      data: {
        id,
      },
      msg: '获取成功',
    };
  }

  remove(id: string) {
    return {
      code: 200,
      data: {
        id,
      },
      msg: '删除成功',
    };
  }

  update(data: UpdateDto) {
    return {
      code: 200,
      data,
      msg: '更新成功',
    };
  }
}
