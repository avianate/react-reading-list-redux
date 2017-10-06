import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';
import { searchForBook, deleteBook, toggleRead, rate} from "../actions/book-list-actions";
import { selectUserBookData } from "../reducers/reading-list-reducers";
import ReadingListView from "../views/ReadingListView";

const pageMeta = {
    title: "Reading List",
    tags: [
        { "name": "description", "content": "A React Reading List with Redux" },
        { "property": "og:type", "content": "article" }
    ]
};

const mapStateToProps = state => ({
    myBooks: selectUserBookData(state.bookList),
});

const bindActionsToDispatch = dispatch => ({
    setPageMeta: (meta) => {dispatch(setPageMeta(meta))},
    onAdd: (titleOrISBN) => {dispatch(searchForBook(titleOrISBN))},
    onDelete: (bookId) => {dispatch(deleteBook(bookId))},
    onReadToggle: (bookId) => {dispatch(toggleRead(bookId))},
    onRate: (bookId, rating) => {dispatch(rate(bookId, rating))}

});

const mergeAllProps = (store, actions) => ({
    ...store,
    ...actions,
    init: () => {
        actions.setPageMeta(pageMeta);
    },
    title: "Reading List"
});

const storeConnector = connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllProps
);

class BookListContainer extends Component {
    
    static onServer(props, store) {
        return store.dispatch(setPageMeta(pageMeta))
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        return <ReadingListView {...this.props} />
    }
}

export default storeConnector(BookListContainer);