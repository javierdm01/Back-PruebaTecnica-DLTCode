/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CriaturasService } from './criaturas.service';
import { CriaturasController } from './criaturas.controller';
import { Criatura } from './entities/criatura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from 'src/personas/entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Criatura,Persona])],
  controllers: [CriaturasController],
  providers: [CriaturasService],
})
export class CriaturasModule {}
