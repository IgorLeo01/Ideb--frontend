import { apiSlice } from "../../app/api/apiSlice";

export const companyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (newCompany) => ({
        url: "/empresa",
        method: "POST",
        body: { ...newCompany },
      }),
    }),
  }),
});

export const { useCreateCompanyMutation } = companyApiSlice;