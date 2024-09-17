/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator";


export class eliminarCriaturasDto  {
    @IsString()
    nombre: string;

    @IsEmail()
    correo: string;
}

