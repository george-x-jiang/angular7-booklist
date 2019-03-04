import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../model/Book';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  displayedColumns = ['title', 'description', 'delete'];
  dataSource: any;

  constructor(private dataService: DataService) {
    this.dataSource = new BookDataSource(this.dataService);
  }

  get Count(): number {
    return this.dataService.dataLength();
  }

  deleteBook(id) {
    this.dataService.deleteBook(id);
    this.dataSource = new BookDataSource(this.dataService);
  }

  addBook(newBook) {
    this.dataService.addBook(newBook.data);
    this.dataSource = new BookDataSource(this.dataService);
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Book[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
