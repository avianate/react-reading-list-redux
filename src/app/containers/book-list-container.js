import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageMeta } from '../actions/page-meta';
import { init as initGreeting, toggleGreeting } from "../actions/greeting-action";
import { addBook, deleteBook, toggleRead, rate} from "../actions/book-list-actions";
import ReadingListView from "../views/ReadingListView";

const pageMeta = {
    title: "Reading List",
    tags: [
        { "name": "description", "content": "A React Reading List with Redux" },
        { "property": "og:type", "content": "article" }
    ]
};

const mapStateToProps = state => ({
    greetingMessage: state.greeting.greeting,
    greetingVisible: state.greeting.visible
});

const bindActionsToDispatch = dispatch => ({
    setPageMeta: (meta) => {dispatch(setPageMeta(meta))},
    initGreeting: () => {dispatch(initGreeting())},
    toggleGreeting: () => {dispatch(toggleGreeting())},
    onAdd: () => {dispatch(addBook())},
    onDelete: () => {dispatch(deleteBook())},
    onReadToggle: () => {dispatch(toggleRead())},
    onRate: () => {dispatch(rate())}

});

const mergeAllProps = (store, actions) => ({
    ...store,
    toggleGreeting: actions.toggleGreeting,
    init: () => {
        actions.setPageMeta(pageMeta);
        actions.initGreeting();
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