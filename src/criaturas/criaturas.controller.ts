/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Put, Delete } from '@nestjs/common';
import { CriaturasService } from './criaturas.service';
import { buscarCriaturasDto } from './dto/buscarCriaturas.dto';
import { crearCriaturasDto } from './dto/crearCriaturas.dto';
import { editarCriaturasDto } from './dto/editarCriaturas.dto';
import { eliminarCriaturasDto } from './dto/eliminarCriaturas.dto';

@Controller('criaturas')
export class CriaturasController {
  constructor(private readonly criaturasService: CriaturasService) {}

  @Post('buscarCriaturas')
  buscarCriaturas(@Body() buscarCriaturasDTO: buscarCriaturasDto) {
    return this.criaturasService.buscarCriaturas(buscarCriaturasDTO);
  }

  @Post('crearCriaturas')
  crearCriaturas(@Body() crearCriaturasdto: crearCriaturasDto) {
    return this.criaturasService.crearCriaturas(crearCriaturasdto);
  }

  @Put('editarCriaturas')
  editarCriaturas(@Body() editarCriaturasdto: editarCriaturasDto) {
    return this.criaturasService.editarCriaturas(editarCriaturasdto);
  }

  @Delete('eliminarCriaturas')
  eliminarCriaturas(@Body() eliminarCriaturasdto: eliminarCriaturasDto) {
    return this.criaturasService.eliminarCriaturas(eliminarCriaturasdto);
  }

}
