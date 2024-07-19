import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homeReducer from '../slices/homePageSlice';
import { combineReducers } from 'redux';
import { homeApi } from '../services/homePageApi';
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  home: homeReducer,
  [homeApi.reducerPath]: homeApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(homeApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
