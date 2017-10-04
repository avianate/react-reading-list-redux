export const ADD_BOOK = "ADD_BOOK",
             REMOVE_BOOK = "REMOVE_BOOK", 
             TOGGLE_READ = "TOGGLE_READ", 
             RATE_BOOK = "RATE_BOOK";

import {imgSrc, title, meta, body} from "../MockData";

/*
    bookList: {
        myBooks: [01234, 43210],
        books: {
            987654321: {...}
            1234567890: {...}
        },
        read: [43210],
        rating: {
            987654321: 5,
            1234567890: 3
        }
    }
*/

const initialState = {
    myBooks: ["0760348596"],
    books: {
        "0760348596": {
            isbn: "0760348596",
            title,
            meta,
            body,
            imgSrc
        }
    },
    read: ["0760348596"],
    ratings: {
        "0760348596": 4
    }
};

// const initialState = {
//     myBooks: [],
//     books: {},
//     read: [],
//     ratings: {}
// }

export default function(state=initialState, action) {
    const payload = action.payload;

    switch(action.type) {
        case ADD_BOOK:
            return {...state, myBooks: [...state.myBooks, payload.isbn], books: {...state.books, [payload.isbn]: {...payload}}};
        case REMOVE_BOOK:
            let bookId = payload;
            const filteredBooks = Object.keys(state.books).filter(id => id !== bookId);
            const read = state.read.filter(id => id !== bookId);
            const ratings = Object.keys(state.ratings).filter(id => id !== bookId);
            return {...state, myBooks: [...state.myBooks.filter(id => id !== bookId)], books: filteredBooks, read, ratings};
        case TOGGLE_READ:
            bookId = payload;
            let isRead = !!state.read.find(id => id === bookId);
            if (isRead) {
                return {...state, read: [...state.read.filter(id => id !== bookId)]};
            } else {
                return {...state, read: [...state.read, bookId]};
            }
        case RATE_BOOK:
            bookId = payload.bookId;
            const rating = payload.rating;
            const isCurrentRating = parseInt(state.ratings[bookId], 10) === rating;
            
            if (isCurrentRating) {
                const filtered = Object.keys(state.ratings).filter(id => id !== bookId);
                return {...state, ratings: {...filtered} };
            }
            return {...state, ratings: {...state.ratings, [bookId]: rating}};
        default:
            return state;
    }
}

export const selectUserBookData = (bookList) => {
    const { myBooks, books, read, ratings } = bookList;

    if (myBooks == null) {
        return [];
    }
    
    const myBookList = myBooks.map(id => books[id]);

    const data = myBookList.map(book => ({
        ...book,
        isRead: read.includes(book.isbn),
        ratings: ratings[book.isbn]
    }));


    return data;
}