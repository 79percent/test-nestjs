import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty()
  readonly name?: string;
}

export type id = number;
