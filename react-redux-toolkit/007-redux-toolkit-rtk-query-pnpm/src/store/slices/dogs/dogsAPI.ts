import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

const dogsApi = createApi({
  reducerPath: "dogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers, api) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});

export const { useFetchBreedsQuery } = dogsApi;
export default dogsApi;
