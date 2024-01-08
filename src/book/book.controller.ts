import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':bookId')
  findOne(@Param('bookId',ParseIntPipe) bookId: number) {
    return this.bookService.findOne(bookId);
  }

  @Patch(':bookId')
  update(@Param('bookId',ParseIntPipe) bookId: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update( bookId,updateBookDto);
  }

  @Delete(':bookId')
  remove(@Param('bookId',ParseIntPipe) bookId: number) {
    return this.bookService.remove(bookId);
  }


}
