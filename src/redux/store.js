import cartReducer from "./cartReducer";
import favsReducer from "./favsReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favs: favsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
