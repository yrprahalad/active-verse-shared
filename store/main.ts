import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { attachSagasLocally } from './saga-initialization';
import { ApplicationState } from './types';
import { userReducer } from './auth/reducer';

const rootReducer = combineReducers<ApplicationState>({
    userState: userReducer
});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

attachSagasLocally();
export default store;
