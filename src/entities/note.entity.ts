import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("notes")
export class Note{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "text", nullable: true})
    title: string;

    @Column({type: "text"})
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, {eager: true, nullable: false})
    @JoinColumn()
    user: User;
}