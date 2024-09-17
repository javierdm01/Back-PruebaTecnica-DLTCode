/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/RegisterAuth.dto';
import { LoginAuthDto } from './dto/LoginAuth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
    registerUser(@Body() clientDto: RegisterAuthDto){
        return this.authService.register(clientDto)
    }
 
    @Post('login')
    loginUser(@Body( ) userObjectLogin: LoginAuthDto){
        return this.authService.signIn(userObjectLogin)
    }
}
