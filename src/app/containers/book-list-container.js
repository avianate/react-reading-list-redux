//region Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';
import { searchForBook, deleteBook, toggleRead, rate} from "../actions/book-list-actions";
import { selectUserBookData } from "../reducers/reading-list-reducers";
import ReadingListView from "../views/ReadingListView";

//endregion

//region Meta

const pageMeta = {
    title: "Reading List",
    tags: [
        { "name": "description", "content": "A React Reading List with Redux" },
        { "property": "og:type", "content": "article" }
    ]
};

//endregion

//region Props & Actions

//region Props

const mapStateToProps = state => ({
    myBooks: selectUserBookData(state.bookList),
});

//endregion

//region Actions

const bindActionsToDispatch = dispatch => ({
    setPageMeta: (meta) => {dispatch(setPageMeta(meta))},
    onAdd: (titleOrISBN) => {dispatch(searchForBook(titleOrISBN))},
    onDelete: (bookId) => {dispatch(deleteBook(bookId))},
    onReadToggle: (bookId) => {dispatch(toggleRead(bookId))},
    onRate: (bookId, rating) => {dispatch(rate(bookId, rating))}

});

//endregion

//region Merge all the things

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

//endregion

//endregion

//region Components
class BookListContainer extends Component {
    
    static onServer(props, store) {
        return store.dispatch(setPageMeta(pageMeta))
    }

    //region Actions
    componentDidMount() {
        this.props.init();
    }

    //endregion

    //region Render
    render() {
        return <ReadingListView {...this.props} />
    }

    //endregion
}

export default storeConnector(BookListContainer);

//endregion