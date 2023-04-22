import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string
}