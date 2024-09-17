/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Put } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { OnePersonaDto } from './dto/onePersona.dto';
import { ModificarPersonaDto } from './dto/modificarPersona.dto';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post('getOnePersona')
  getOnePersona(@Body() onepersona: OnePersonaDto) {
    return this.personasService.onePersona(onepersona);
  }

  @Put('updatePersona')
  updatePersona(@Body() modificarPersona: ModificarPersonaDto) {
    return this.personasService.modificarPersona(modificarPersona);
  }
  
}
