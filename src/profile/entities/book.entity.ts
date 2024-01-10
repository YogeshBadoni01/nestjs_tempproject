import { User } from "src/user/entity/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    bookId:number;

    @Column()
    BookName:string;

    @Column()
    AuthorName:string;
    users: any;

    // @Column()
    // CreatedTime:string;

    // @OneToMany(() => User, user => user.book)
    // user: User[];
  

}
