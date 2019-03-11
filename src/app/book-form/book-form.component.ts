import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../model/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  categories = this.dataService.getCategories();

  newBook: Book = {
    index: null,
    title: null,
    category: null,
    description: null,
    date_added: new Date()
  };

  @Output() bookSubmitted: EventEmitter<Book> = new EventEmitter();

  constructor(public dataService: DataService) {
  }

  onSubmit(bookForm: NgForm): void {

    if (!bookForm.form.valid) {
      return;
    }

    this.newBook.index = this.dataService.dataLength();
    this.bookSubmitted.emit(this.newBook);

    // Bind new object to the form before resetting
    this.newBook = {
      index: null,
      title: null,
      category: null,
      description: null,
      date_added: new Date()
    };

    bookForm.resetForm();
  }
}
