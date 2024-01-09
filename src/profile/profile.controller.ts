import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {

    private logger = new Logger('jwtStrategy')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile(){
        this.logger.log(`this is profile login`)
        return {message :"this Route is protected  "};
    }
}

// profile.controller.ts

// import { Controller, Get, Logger, UseGuards, Post, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { BooksService } from './book.service';

// @Controller('profile')
// export class ProfileController {
//   private logger = new Logger('jwtStrategy');

//   constructor(private readonly booksService: BooksService) {}

//   @UseGuards(AuthGuard('jwt'))
//   @Get()
//   profile() {
//     this.logger.log(`this is profile login`);
//     return { message: 'This route is protected.' };
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Post('add-book')
//   addBook(@Body() bookData) {
//     // Assuming bookData is an object containing book details
//     this.booksService.addBook(bookData);
//     return { message: 'Book added successfully.' };
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get('all-books')
//   getAllBooks() {
//     const books = this.booksService.getAllBooks();
//     return { books };
//   }
// }