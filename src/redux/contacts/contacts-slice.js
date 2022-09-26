import { combineReducers, createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, removeContact } from "./contacts-operations";

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    extraReducers: {
        [fetchContacts.fulfilled]: (_, { payload }) => payload,
        [addContact.fulfilled]: (store, { payload }) => [...store, payload],
        [removeContact.fulfilled]: (store, { payload }) => store.filter(item => item.id !== payload),
    }
});

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    extraReducers: {
        [fetchContacts.pending]: () => true,
        [fetchContacts.fulfilled]: () => false,
        [fetchContacts.rejected]: () => false,
        [addContact.pending]: () => true,
        [addContact.fulfilled]: () => false,
        [addContact.rejected]: () => false,
        [removeContact.pending]: () => true,
        [removeContact.fulfilled]: () => false,
        [removeContact.rejected]: () => false,
    }
});

const errorSlice = createSlice({
    name: "error",
    initialState: null,
    extraReducers: {
        [fetchContacts.pending]: () => null,
        [fetchContacts.rejected]: (_, { payload }) => payload,
        [addContact.pending]: () => null,
        [addContact.rejected]: (_, { payload }) => payload,
        [removeContact.pending]: () => null,
        [removeContact.rejected]: (_, {payload}) => payload,
    }
});

const contactsReducer = combineReducers({
    items: itemsSlice.reducer,
    loading: loadingSlice.reducer,
    error: errorSlice.reducer,
})

export default contactsReducer;

// const initialState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState,
//     extraReducers: {
//         [fetchContacts.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [fetchContacts.fulfilled]: (store, {payload}) => {
//             store.loading = false;
//             store.items = payload;
//         },
//         [fetchContacts.rejected]: (store, { payload }) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [addContact.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [addContact.fulfilled]: (store, {payload}) => {
//             store.loading = false;
//             store.items.push(payload);
//         },
//         [addContact.rejected]: (store, { payload }) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [removeContact.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [removeContact.fulfilled]:(store, {payload}) => {
//             store.loading = false;
//             store.items = store.items.filter((item) => item.id !== payload);
//         },
//         [removeContact.rejected]: (store, { payload }) => {
//             store.loading = false;
//             store.error = payload;
//         }
//     }
// });

// export default contactsSlice.reducer;