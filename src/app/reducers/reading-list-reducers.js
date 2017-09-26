export const ADD_BOOK = "ADD_BOOK",
             REMOVE_BOOK = "REMOVE_BOOK", 
             TOGGLE_READ = "TOGGLE_READ", 
             RATE_BOOK = "RATE_BOOK";

export const addBook = ({type, book}) => {
    switch (type) {
        case ADD_BOOK:
            return {...state, myBooks: [...myBooks, book.id], books: {...books, book}};
        default:
            return state;
    }
};

export const removeBook = ({type, bookId}) => {
    switch (type) {
        case REMOVE_BOOK:
            return {...state, myBooks: [...myBooks.filter(id => id !== bookId)], books: {Object.keys(books).filter(id => id !== bookId)}}
        default:
            return state;
    }
};

export const toggleRead = ({type, bookId}) => {
    switch (type) {
        case TOGGLE_READ:
            return state;
        default:
            return state;
    }
};

export const rate = ({type, bookId, rating}) => {
    switch(type) {
        case RATE_BOOK:
            return state;
        default:
            return state;
    }
};