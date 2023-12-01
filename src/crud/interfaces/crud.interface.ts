import { CreateDto } from '../dto/crud.create.dto';

export type CreateDtoWidthId = CreateDto & {
  id: number;
};
