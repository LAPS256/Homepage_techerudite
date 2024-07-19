import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.7.81.243:3253/' }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `api/blog/`,
    }),
    getSettingsData: builder.query({
      query: () => `api/settings/fetch-frontend-details`,
    }),
    submitContactForm: builder.mutation({
      query: (contactData) => ({
        url: 'api/contact/send',
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
});

export const { useGetBlogsQuery, useGetSettingsDataQuery,useSubmitContactFormMutation } = homeApi;