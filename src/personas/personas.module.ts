/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Criatura } from 'src/criaturas/entities/criatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona,Criatura])],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
