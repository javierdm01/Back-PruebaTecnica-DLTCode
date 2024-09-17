/* eslint-disable prettier/prettier */
import { Criatura } from 'src/criaturas/entities/criatura.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30, nullable: false, name: 'nombre'})
    nombre: string;

    @Column({type: 'varchar', length: 50, nullable: false, name: 'correo', unique: true})
    correo: string;

    @Column({type: 'varchar', length: 255, nullable: false, name: 'contrasena'})
    contrasena: string;

    @Column({type: 'varchar', length: 50, nullable: false, name: 'rol'})
    rol: string;

    @Column({type: 'varchar', length: 255, nullable: true, name: 'descripcion'})
    descripcion: string;

    @OneToMany(() => Criatura, criatura => criatura.persona)
    criaturas: Criatura[];
}

