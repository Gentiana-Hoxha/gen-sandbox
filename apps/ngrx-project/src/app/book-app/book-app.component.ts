import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BooksActions, BooksApiActions, GoogleBooksService, selectBookCollection, selectBooks } from '@gen-sandbox/project-lib';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [GoogleBooksService],
  templateUrl: './book-app.component.html',
  styleUrls: ['./book-app.component.scss'],
})
export class BookAppComponent implements OnInit {

  public books$!: Observable<any>;
  public bookCollection$!: Observable<any>;

  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  ngOnInit() {

    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  public onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  public onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
