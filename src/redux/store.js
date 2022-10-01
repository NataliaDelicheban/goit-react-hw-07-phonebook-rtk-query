import { configureStore } from "@reduxjs/toolkit";

import contactsApi from "./contacts/contactsApi";
import filterReducer from "./filter/filter-reduser";

const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})

export default store;
