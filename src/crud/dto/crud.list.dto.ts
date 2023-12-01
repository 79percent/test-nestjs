import { ApiProperty } from '@nestjs/swagger';

export class PageQuery {
  @ApiProperty()
  current?: number;
  @ApiProperty()
  pageSize?: number;
}
