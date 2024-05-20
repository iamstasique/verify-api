import { configureStore } from '@reduxjs/toolkit';
import { documentsApi } from '../api/documents.api';

export const STORE = configureStore({
  reducer: {
    [documentsApi.reducerPath]: documentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([documentsApi.middleware]),
});
