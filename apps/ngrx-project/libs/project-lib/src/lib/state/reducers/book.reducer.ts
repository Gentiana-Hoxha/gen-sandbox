import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book.model';
import { BooksApiActions } from '../actions/book.actions';


export const initialBookState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialBookState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);