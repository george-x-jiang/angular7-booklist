import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  categories = this.dataService.getCategories();

  newBook: Book = {
    index: 0,
    title: '',
    category: '',
    description: '',
    date_added: new Date()
  };

  @ViewChild('bookForm') form: any;

  @Output() bookSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(public dataService: DataService) {
  }

  onSubmit(): void {

    if (!this.form.valid) {
      return;
    }

    this.newBook.index = this.dataService.dataLength();
    this.bookSubmitted.emit({data: this.newBook});

    this.newBook = {
      index: 0,
      title: '',
      category: '',
      description: '',
      date_added: new Date()
    };

    this.form.resetForm();
  }
}
