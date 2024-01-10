// import { Book } from "src/book/entities/book.entity"; //book folder
import { Book } from "src/profile/entities/book.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User{
    @PrimaryGeneratedColumn()
    userId:number;

    @Column()
    name:string;

    @Column()
    email:string

    @Column()
    password:string

    @ManyToOne(() => Book, book => book.users)
    book: Book;
}