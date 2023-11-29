import { ApiProperty } from '@nestjs/swagger';

/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  @ApiProperty()
  readonly name?: string;
  @ApiProperty()
  readonly age?: number;
}
