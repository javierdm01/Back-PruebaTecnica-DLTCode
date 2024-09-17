import { PartialType } from '@nestjs/mapped-types';
import { CreateCriaturaDto } from './create-criatura.dto';

export class UpdateCriaturaDto extends PartialType(CreateCriaturaDto) {}
