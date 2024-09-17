/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from "class-validator";

export class ValidateEmailDto {
    
    @IsString()
    correo: string;

    @IsNumber()
    activationToken: number;

}