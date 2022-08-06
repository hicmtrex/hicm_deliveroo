import { configureStore, combineReducers } from '@reduxjs/toolkit';
import basketReducer from './basket-slice';
import restaurantSlice from './restaurant-slice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  basket: basketReducer,
  restaurant: restaurantSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
