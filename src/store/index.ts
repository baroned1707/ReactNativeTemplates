import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import userSlice from './reducer/user';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers: any = combineReducers({
  user: persistReducer<any>(userPersistConfig, userSlice),
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
