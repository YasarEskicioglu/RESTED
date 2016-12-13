import Immutable from 'immutable';
import localforage from 'localforage';
import { getCollections } from './selectors';
import {
  FETCH_COLLECTIONS,
  RECEIVE_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  ADD_REQUEST,
  DELETE_REQUEST,
  REORDER_REQUEST,
  REORDER_COLLECTION,
} from './types';

export function startFetch() {
  return { type: FETCH_COLLECTIONS };
}

export function receiveCollections(collections) {
  return { type: RECEIVE_COLLECTIONS, collections };
}

// TODO Test
export function fetchCollections() {
  return dispatch => {
    dispatch(startFetch());

    return localforage
      .getItem('collections')
      .then(collections => dispatch(
        receiveCollections(Immutable.fromJS(collections) || Immutable.List())
      ));
  };
}

export function doAddCollection() {
  return { type: ADD_COLLECTION };
}

// TODO Test
export function addCollection() {
  return (dispatch, getState) => {
    dispatch(doAddCollection());

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

export function doDeleteCollection(collectionId) {
  return { type: DELETE_COLLECTION, collectionId };
}

// TODO Test
export function deleteCollection(collectionId) {
  return (dispatch, getState) => {
    dispatch(doDeleteCollection(collectionId));

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

export function doDeleteRequest(requestId, collectionIndex) {
  return { type: DELETE_REQUEST, requestId, collectionIndex };
}

// TODO Test
export function deleteRequest(requestId, collectionIndex) {
  return (dispatch, getState) => {
    dispatch(doDeleteRequest(requestId, collectionIndex));

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

export function doAddRequest(request, collectionIndex) {
  return { type: ADD_REQUEST, request, collectionIndex };
}

// TODO Test
export function addRequest(request, collectionIndex) {
  return (dispatch, getState) => {
    dispatch(doAddRequest(request, collectionIndex));

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

export function doReorderRequest(source, target) {
  return { type: REORDER_REQUEST, source, target };
}

// TODO Test
export function reorderRequest(source, target) {
  return (dispatch, getState) => {
    dispatch(doReorderRequest(source, target));

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

export function doReorderCollection(oldIndex, newIndex) {
  return { type: REORDER_COLLECTION, oldIndex, newIndex };
}

// TODO Test
export function reorderCollection(oldIndex, newIndex) {
  return (dispatch, getState) => {
    dispatch(doReorderCollection(oldIndex, newIndex));

    return localforage
      .setItem('collections', getCollections(getState()).toJS());
  };
}

