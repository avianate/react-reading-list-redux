import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isBrowser from 'is-in-browser';
import { routerReducer as routing } from 'react-router-redux';

import {ALLOW_REDUX_DEV_TOOLS} from './env';

import system, * as fromSystem from './reducers/system';
import nav, * as fromSiteNav from './reducers/site-nav';
import pageMeta, * as fromPageMeta from './reducers/page-meta';
import greeting from "./reducers/greeting-reducer.js";
import bookList from "./reducers/reading-list-reducers";

const preloadedState = {
  bookList: {
      myBooks: [],
      books: {},
      read: [],
      ratings: {}
  }
}

// create the master reducer
const rootReducer = combineReducers({nav, system, routing, pageMeta, greeting, bookList}, preloadedState);

//region Selectors

// Reexport scoped selectors here:
export const selectSiteNav = (state) => (
    fromSiteNav.selectSiteNav(state.nav)
);

export const selectHTTPResponseCode = (state) => (
    fromSystem.selectHTTPResponseCode(state.system)
);

export const selectAllApplicationErrors = (state) => (
    fromSystem.selectAllApplicationErrors(state.system)
);

export const selectApplicationError = (state, id) => (
    fromSystem.selectApplicationError(state.system, id)
);

export const selectPageMeta = (state) => (
  fromPageMeta.selectPageMeta(state.pageMeta)
);

export const selectPageTitle = (state) => (
  fromPageMeta.selectPageTitle(state.pageMeta)
);

export const selectMetaTags = (state) => (
  fromPageMeta.selectMetaTags(state.pageMeta)
);

//endregion

//region Initial state

// determine initial state
const initialState = isBrowser
  ? window.__INITIAL_STATE__ || {}
  : {};

//endregion

//region Middleware

const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && ALLOW_REDUX_DEV_TOOLS==="1" && typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
);

//endregion

// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );
