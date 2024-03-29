import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {

    @IsNotEmpty()
    BookName?: string;

    @IsNotEmpty()
    AuthorName?: string;

    // @IsString()
    // CreateTime?: string;
}
