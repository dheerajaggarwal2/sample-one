import { createStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// const store = createStore(reducer, composeWithDevTools());

const persistConfig = {
    key: 'root',
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, reducer);
  
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

// export default store;