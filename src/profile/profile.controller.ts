// import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

// @Controller('profile')
// export class ProfileController {

//     private logger = new Logger('jwtStrategy')
//     @UseGuards(AuthGuard('jwt'))
//     @Get()
//     profile(){
//         this.logger.log(`this is profile login`)
//         return {message :"this Route is protected  "};
//     }
// }

// profile.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('profile')
export class ProfileController {
  private logger = new Logger('jwtStrategy')

  constructor(private readonly bookService: BookService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        this.logger.log(`${createBookDto.BookName} is created `);
      return this.bookService.create(createBookDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll() {
    this.logger.log(`All Book are here `);
      return this.bookService.findAll();
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get(':bookId')
    findOne(@Param('bookId',ParseIntPipe) bookId: number) {
        this.logger.log(`${bookId} is selected to view `);
        return this.bookService.findOne(bookId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':bookName')
    findByBookName(@Param('bookName',ParseIntPipe) bookName: number) {
        this.logger.log(`${bookName} is selected to view ${Param} `);
        return this.bookService.findOne(bookName);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':bookId')
    update(@Param('bookId',ParseIntPipe) bookId: number, @Body() updateBookDto: UpdateBookDto) {
      this.logger.log(`${updateBookDto.BookName} is updated `);
      return this.bookService.update( bookId,updateBookDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':bookId')
    remove(@Param('bookId',ParseIntPipe) bookId: number) {
      this.logger.log(`${bookId} is deleted `);
      return this.bookService.remove(bookId);
    }

}