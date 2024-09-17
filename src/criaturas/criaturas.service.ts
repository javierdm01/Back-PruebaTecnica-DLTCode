/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/personas/entities/persona.entity';
import { Repository } from 'typeorm';
import { buscarCriaturasDto } from './dto/buscarCriaturas.dto';
import { Criatura } from './entities/criatura.entity';
import { crearCriaturasDto } from './dto/crearCriaturas.dto';
import { editarCriaturasDto } from './dto/editarCriaturas.dto';


@Injectable()
export class CriaturasService {
    constructor(
      @InjectRepository(Persona)
        private personaRepository: Repository<Persona>,
      @InjectRepository(Criatura)
        private criaturaRepository: Repository<Criatura>,

    ) {}
  async buscarCriaturas(buscarCriaturasDto: buscarCriaturasDto) {
    try {
      const persona = await this.personaRepository.findOne({ where: { correo: buscarCriaturasDto.correo } });
      if (!persona) {
        throw new InternalServerErrorException('No se encontro la persona');
      }
      const criaturas = await this.criaturaRepository.find({ where: { persona: persona } });
      if (!criaturas) {
        throw new InternalServerErrorException('No se encontraron criaturas');
      }
      console.log(criaturas)
      return criaturas;
    } catch (error) {
      throw new Error(error.message)
      
    }
  }

  async crearCriaturas(crearCriaturasdto: crearCriaturasDto) {
    console.log(crearCriaturasdto);
    try {
      const personaAñadida = await this.personaRepository.findOne({ where: { correo: crearCriaturasdto.correo } });
      if (!personaAñadida) {
        throw new NotFoundException('No se encontro la persona');
      }
      const criaturaExistente = await this.criaturaRepository.findOne({ where: 
        { nombre: crearCriaturasdto.nombre,
          persona:personaAñadida
         } });
      if(criaturaExistente){
        throw new NotFoundException('Ya existe una criatura con ese nombre');
      }
      const criatura = this.criaturaRepository.create({
        nombre: crearCriaturasdto.nombre,
        tipo: crearCriaturasdto.tipo,
        nivel: crearCriaturasdto.nivel,
        entrenado: crearCriaturasdto.entrenado,
        persona: personaAñadida,
      });

      await this.criaturaRepository.save(criatura);
      return criatura;
    } catch (error) {
      throw new Error(error.message)
      
    }
  }

  async editarCriaturas(editarCriaturasdto: editarCriaturasDto) {
    const edit = await this.personaRepository.findOne({
      where: {correo: editarCriaturasdto.correo},
    });
    if (!edit) throw new Error('Criatura no encontrada');
    const id=await this.criaturaRepository.findOne({where:
      {nombre:editarCriaturasdto.anteriorNombre,
      persona: edit}});
    return await this.criaturaRepository.update(id.id,{
      nombre: editarCriaturasdto.nombre,
      tipo: editarCriaturasdto.tipo,
      nivel: editarCriaturasdto.nivel,
      entrenado: editarCriaturasdto.entrenado,
    });
    
  }

  async eliminarCriaturas(eliminarCriaturasDto: { nombre: string; correo: string; }) {
    const persona = await this.personaRepository.findOne({ where: { correo: eliminarCriaturasDto.correo } });
    if (!persona) {
      throw new NotFoundException('No se encontro la persona');
    }
    const criatura = await this.criaturaRepository.findOne({ where: 
      { nombre: eliminarCriaturasDto.nombre,
        persona:persona
       } });
    if (!criatura) {
      throw new NotFoundException('No se encontro la criatura');
    }
    await this.criaturaRepository.delete(criatura.id);
    return { message: 'Criatura eliminada correctamente' };
  }
}
