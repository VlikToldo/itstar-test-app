import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import walletSlice from './wallet/wallet-slice';

const rootReducer = combineReducers({
    transactions: walletSlice,
})

const persistConfig = {
    key: 'wallet',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)  

export default persistedReducer;