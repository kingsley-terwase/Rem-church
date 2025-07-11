import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import rootReducer from "./rootReducer"; 
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(logger), 
});


const persistor = persistStore(store);

export { store, persistor };
