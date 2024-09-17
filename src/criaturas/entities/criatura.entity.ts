/* eslint-disable prettier/prettier */
import { Persona } from "src/personas/entities/persona.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Criatura {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30, nullable: false, name: 'nombre'})
    nombre: string;

    @Column({type: 'varchar', length: 50, nullable: false, name: 'tipo'})
    tipo: string;

    @Column({type: 'numeric', nullable: false, name: 'nivel'})
    nivel: string;

    @Column({type: 'boolean', nullable: false, name: 'entrenado'})
    entrenado: boolean;

    @ManyToOne(() => Persona, persona => persona.criaturas)
    persona: Persona;
}
