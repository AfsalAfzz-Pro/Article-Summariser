import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
console.log('rapidApiKey:', rapidApiKey);
 export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        console.log('params:', params);
        if (!params || !params.articleUrl) {
          throw new Error('Missing article URL.');
        }
        const encodedUrl = encodeURIComponent(params.articleUrl);
        console.log('encodedUrl:', encodedUrl);
        return `/summarize?url=${encodedUrl}&length=3`;
      },
    }),
  }),
});
 export const { useLazyGetSummaryQuery } = articleApi;