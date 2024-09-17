/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from 'src/personas/entities/persona.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { JwStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: {expiresIn: '300s'}
}),],
  
  controllers: [AuthController],
  providers: [AuthService,JwStrategy ],
})
export class AuthModule {}
