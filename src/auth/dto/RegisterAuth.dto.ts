/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator";


export class RegisterAuthDto {
    @IsEmail()
    correo: string;

    @IsString()
    contrasena: string;

    @IsString()
    nombre: string;

    @IsString()
    rol: string;


}