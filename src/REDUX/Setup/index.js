import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import Sagas from './saggas';
import logger from 'redux-logger';

// Saga middleware
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare, logger),
);

// Run the saga
sagaMiddleWare.run(Sagas);