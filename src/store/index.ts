import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { rootAction } from './reducers/rootAction';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export { rootAction };

export type RootState = ReturnType<typeof rootReducer>;
