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
