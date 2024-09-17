/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";


export class crearCriaturasDto  {
    @IsString()
    nombre: string;
    
    @IsString()
    tipo: string;

    @IsNumber()
    nivel: string;

    @IsBoolean()
    entrenado: boolean;

    @IsEmail()
    correo: string;
}