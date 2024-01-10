import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Body, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./entities/book.entity";

@Injectable()
export class BookService {
  private logger = new Logger('BookService');

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  // async findOne(@Body() bookId: any): Promise<Book | undefined> {
  //   // this.logger.log(`${this.bookRepository.findOne(bookId)}`)
  //   try {
  //     return await this.bookRepository.findOneOrFail(bookId);
  //   } catch (error) {
  //     this.logger.error(`Book not found with ID ${bookId}`);
  //     throw new NotFoundException(`Book not found with ID ${bookId}`);
  //   }
  // }
  async findOne(bookId: any): Promise<Book | undefined> {
    this.logger.log(`Searching for book with ID: ${bookId}`);
    try {
      const book = await this.bookRepository.findOneOrFail({ where: { bookId } });
      this.logger.log(`Book found: ${JSON.stringify(book)}`);
      return book;
    } catch (error) {
      this.logger.error(`Error finding book with ID ${bookId}: ${error.message}`);
      throw new NotFoundException(`Book not found with ID ${bookId}`);
    }
  }
  
  

  async update(bookId: number, updateBookDto: UpdateBookDto): Promise<void> {
    await this.findOne(bookId); // Ensure the book exists
    await this.bookRepository.update(bookId, updateBookDto);
  }

  async remove(bookId: number): Promise<void> {
    await this.findOne(bookId); // Ensure the book exists
    await this.bookRepository.delete(bookId);
  }


  // async findByBookName(BookName: string): Promise<Book | undefined> {
  //   try {
  //     return await this.bookRepository.findOneOrFail({ where: { BookName } });
  //   } catch (error) {
  //     this.logger.error(`Book not found with name ${BookName}`);
  //     throw new NotFoundException(`Book not found with name ${BookName}`);
  //   }
  // }
}
