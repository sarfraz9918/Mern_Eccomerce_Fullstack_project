import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine reducers (if you have more reducers, add them here)
const rootReducer = combineReducers({
  cartProduct: productReducer,

});

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

// Export store and persistor
export { store, persistor };
