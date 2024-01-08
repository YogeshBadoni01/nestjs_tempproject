import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  bookService: any;

  // constructor (
  //   @InjectableRepository(Book)
  //   private useRepository:Repository<Book>,){}

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
    
  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto)
  }

  findAll(): Promise <Book[]> {
    return this.bookRepository.find();
  }

//   findOne(bookId: number) {
//     return this.bookRepository.findOne({where:{bookId}});
//   }

  findOne(bookId : number){
    return this.bookRepository.findOne({where:{bookId}})
}
  update(bookId: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(bookId,updateBookDto);
  }

  remove(bookId: number) {
    return this.bookRepository.delete(bookId);
  }

  findbyBookName(BookName:string){
    return this.bookService.findOne({where:{BookName}})
  }
}


