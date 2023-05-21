import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = 'addaa50f51mshf5d0ac9b124cd96p1ac07ejsne9efd956e146';
 export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        if (!params || !params.articleUrl) {
          throw new Error('Missing article URL.');
        }
        const encodedUrl = encodeURIComponent(params.articleUrl);
        return `/summarize?url=${encodedUrl}&length=3`;
      },
    }),
  }),
});
 export const { useLazyGetSummaryQuery } = articleApi;