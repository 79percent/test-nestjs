import { CreateDto } from './crud.create.dto';

export type UpdateDto = Partial<CreateDto> & {
  id: number;
};
