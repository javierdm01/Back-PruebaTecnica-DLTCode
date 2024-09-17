/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OnePersonaDto } from './dto/onePersona.dto';
import { ModificarPersonaDto } from './dto/modificarPersona.dto';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}
  async onePersona(onePersona: OnePersonaDto): Promise<Persona> {
    return this.personaRepository.findOne({ where:{correo: onePersona.correo }});
  }
  async modificarPersona(modificarPersona:ModificarPersonaDto){
    return this.personaRepository.update({correo:modificarPersona.correo},modificarPersona);
  }
}
