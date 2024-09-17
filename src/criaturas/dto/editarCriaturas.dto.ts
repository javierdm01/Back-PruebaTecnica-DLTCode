/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";
import { crearCriaturasDto } from "./crearCriaturas.dto";


export class editarCriaturasDto extends crearCriaturasDto {
    

    @IsString()
    anteriorNombre: string;
}