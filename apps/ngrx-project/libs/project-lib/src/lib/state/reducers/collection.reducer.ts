import { createReducer, on } from '@ngrx/store';
import { BooksActions } from '../actions/book.actions';

export const initialCollectionState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialCollectionState,
    on(BooksActions.removeBook, (state, { bookId }) =>
      state.filter((id) => id !== bookId)
    ),
    on(BooksActions.addBook, (state, { bookId }) => {
      if (state.indexOf(bookId) > -1) return state;

      return [...state, bookId];
    })
);