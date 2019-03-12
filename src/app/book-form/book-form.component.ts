import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../model/book';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  categories = this.dataService.getCategories();

  bookForm: FormGroup;

  @Output() bookSubmitted: EventEmitter<Book> = new EventEmitter();

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(theForm: NgForm): void {

    if (!this.bookForm.valid) {
      return;
    }

    const index = this.dataService.dataLength();
    this.bookSubmitted.emit({index, ...this.bookForm.value, date_added: new Date()});

    // Resetting the formGroup does not work with Angular Material
    // this.bookForm.reset();
    theForm.resetForm();
  }
}
