/* eslint-disable prettier/prettier */
import { IsEmail } from "class-validator";


export class buscarCriaturasDto  {
    @IsEmail()
    correo: string;
}