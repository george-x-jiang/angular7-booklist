import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {

  BOOK_ARRAY: Book[] = [
    {index: 0, title: 'Book One', category: 'drama', description: 'Description 1', date_added: new Date()},
    {index: 1, title: 'Book Two', category: 'comedy', description: 'Description 2', date_added: new Date()},
    {index: 2, title: 'Book Three', category: 'sport', description: 'Description 3', date_added: new Date()},
  ];
  categories = [
    {value: 'drama', viewValue: 'Drama'},
    {value: 'comedy', viewValue: 'Comedy'},
    {value: 'sport', viewValue: 'Sport'}
  ];

  constructor() {
  }

  getData(): Observable<Book[]> {
    return of<Book[]>(this.BOOK_ARRAY);
  }

  getCategories() {
    return this.categories;
  }

  addBook(data) {
    this.BOOK_ARRAY.push(data);
  }

  deleteBook(index) {
    this.BOOK_ARRAY = [...this.BOOK_ARRAY.slice(0, index), ...this.BOOK_ARRAY.slice(index + 1)];
  }

  dataLength() {
    return this.BOOK_ARRAY.length;
  }
}
