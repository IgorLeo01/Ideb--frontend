import { apiSlice } from "../../app/api/apiSlice";

export const especialistApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEspecialist: builder.mutation({
      query: (newEspecialist) => ({
        url: "/api/especialistas",
        method: "POST",
        body: { ...newEspecialist },
      }),
    }),
    getAllEspecialists: builder.query<any, void>({
      query: () => "/api/especialistas",
    }),
  }),
});

export const { useCreateEspecialistMutation, useGetAllEspecialistsQuery } = especialistApiSlice;
