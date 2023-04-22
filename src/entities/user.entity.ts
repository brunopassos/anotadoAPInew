import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Note } from "./note.entity";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string

    @OneToMany(() => Note, (note) => note.user)
    notes: Note[]
}