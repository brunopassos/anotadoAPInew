import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Note } from "./note.entity";
import { Exclude } from "class-transformer";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    @Exclude()
    password: string

    @OneToMany(() => Note, (note) => note.user)
    notes: Note[]
}