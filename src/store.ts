import createStore from 'redux-zero';
import { IStore } from './types';

const fakeStore = { a: 1 };

const initialState: IStore = { fakeStore };
const store = createStore(initialState);

export default store;
