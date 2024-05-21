import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HttpMethods } from '../enums/http-methods.enum';
import { BASE_URL } from './urls.constant';
import { Urls } from './urls.enum';

export const documentsApi = createApi({
  reducerPath: Urls.Documents,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'CLIENT-ID': 'vrfPDUdc3GSZfNXnjYNmxdC53ebmsMn6kIvy3Nd',
      AUTHORIZATION: 'apikey iamstasique:71c21e4e7c84fb06aaf744fdc685f48e',
    },
  }),
  tagTypes: [Urls.Documents],
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: () => Urls.Documents,
    }),
    sendDocument: builder.mutation({
      query: (body: { file: File }) => {
        const formData = new FormData();
        formData.append('file', body.file);

        return {
          url: Urls.Documents,
          method: HttpMethods.Post,
          body: formData,
        };
      },
      invalidatesTags: [Urls.Documents],
    }),
  }),
});

export const { useGetDocumentsQuery, useSendDocumentMutation } = documentsApi;
