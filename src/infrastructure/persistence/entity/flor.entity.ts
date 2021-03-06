import { Column, PrimaryColumn, Entity } from "typeorm";
@Entity()
export class Flor {

    @PrimaryColumn()
    codigo:      number;

    @Column()
    nombre?: string; 

    @Column()
    aroma?:     string;

    @Column()
    color?:   number;   

    @Column()
    riego?:   number;

    @Column()
    estado?: Conservacion;

    @Column()
    precio?: number;

};


export enum Conservacion {
    RADIANTE,
    SANA,
    MARCHITA,
    SECA
};