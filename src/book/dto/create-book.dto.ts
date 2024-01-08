import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {

    @IsNotEmpty()
    BookName:string;

    @IsNotEmpty()
    AuthorName:string;

    // @IsString()
    // CreateTime:string
    
}
