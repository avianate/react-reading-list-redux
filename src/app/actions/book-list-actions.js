//region Imports

import { ADD_BOOK, REMOVE_BOOK, TOGGLE_READ, RATE_BOOK } from "../reducers/reading-list-reducers";
import BookSearchService from "../services/bookSearchService";

//endregion

//region Actions
export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});

export const deleteBook = (bookId) => ({
    type: REMOVE_BOOK,
    payload: bookId
});

export const toggleRead = (bookId) => ({
    type: TOGGLE_READ,
    payload: bookId
});

export const rate = (bookId, rating) => ({
    type: RATE_BOOK,
    payload: {
        bookId,
        rating
    }
});

//endregion

//region Action-related services

export const searchForBook = (titleOrISBN) => (dispatch) => (
    BookSearchService(titleOrISBN)
        .then(book => dispatch(addBook(book)))
);

//endregion