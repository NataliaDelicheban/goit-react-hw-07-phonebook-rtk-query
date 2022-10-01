
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://631f38b922cefb1edc464596.mockapi.io/contacts"
    }),
    tagTypes: ["Contacts"],
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => "/",
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: "Contacts", id }), { type: "Contacts", id: "LIST" })] : [{ type: "Contacts", id: "LIST" }]
        }),
        addContact: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: [{type: "Contacts", id: "LIST"}]
        }),
        removeContact: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Contacts", id: "LIST"}]
        })
    })
});

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;

export default contactsApi;
