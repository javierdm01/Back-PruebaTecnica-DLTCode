/* eslint-disable prettier/prettier */
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/personas/entities/persona.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/LoginAuth.dto';
import { RegisterAuthDto } from './dto/RegisterAuth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Persona)
        private personaRepository: Repository<Persona>,
        
        private jwtService: JwtService,

    ) {}

    async signIn(personaDto: LoginAuthDto) {
        try {
            const {correo,contrasena} = personaDto 
            const persona = await this.personaRepository.findOne({where: {correo}});
            if (!persona) {
                throw new UnauthorizedException('Credenciales incorrectas');
            }
            const isPasswordValid = await compare(contrasena, persona.contrasena);
            if (!isPasswordValid) {
                throw new UnauthorizedException('Credenciales incorrectas');
            }
            
            const payload = {correo: persona.correo, rol: persona.rol};
            return {
                access_token: this.jwtService.sign(payload),
                correo: persona.correo,
                rol: persona.rol,
            };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async register(personaDto: RegisterAuthDto) {
        try {
            const {correo,contrasena} = personaDto;
            const persona = await this.personaRepository.findOne({where: {correo}});
              
            if (persona) {
                throw new ConflictException('El correo ya está registrado');
            }
            if(contrasena.length < 8){
                throw new BadRequestException('La contraseña debe tener al menos 8 caracteres');
            }
            const hasedPassword = await hash(contrasena,10);
            
            const newPersona = this.personaRepository.create({
                ...personaDto,
                contrasena: hasedPassword,
            });  
            console.log(newPersona)
            await this.personaRepository.save(newPersona);
            return true;
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException(error.message);
        }
    }

} 
