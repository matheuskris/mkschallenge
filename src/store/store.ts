import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

import cartReducer from "./cartSlice/cartSlicer";
import productsReducer from "./productsSlice/productsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartState"],
};

const rootReducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
