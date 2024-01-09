import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [];

  addBook(book) {
    this.books.push(book);
  }

  getAllBooks() {
    return this.books;
  }
}
