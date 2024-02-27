import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { thunk } from "redux-thunk";
import persistedReducer from './redux-persist-config';


// import rootreducers from './reducers/index';
const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store);

// export default store;

export { store, persistor };