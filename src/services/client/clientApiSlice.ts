import { apiSlice } from "../../app/api/apiSlice";

export const clientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createClient: builder.mutation({
      query: (newClient) => ({
        url: "/api/clientes",
        method: "POST",
        body: { ...newClient },
      }),
    }),
  }),
});

export const { useCreateClientMutation } = clientApiSlice;