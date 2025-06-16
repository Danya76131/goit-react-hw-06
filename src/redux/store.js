import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice"; // Імпорт редюсера контактів
import filtersReducer from "./filtersSlice"; // Імпорт редюсера фільтрів

import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// Конфіг для збереження частини стану contacts (тільки items) у localStorage
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Зберігаємо тільки items з contacts
};

// Комбінуємо редюсери, застосовуючи persistReducer до contacts
const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
});

// Створення store з додатковою конфігурацією middleware для redux-persist
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ігноруємо redux-persist екшени для серіалізації
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

// Створюємо persistor для PersistGate
export const persistor = persistStore(store);
