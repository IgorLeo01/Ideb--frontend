import { apiSlice } from "../../app/api/apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendTestResult: builder.mutation({
      query: (newTestResult) => ({
        url: "/resultado",
        method: "POST",
        body: { ...newTestResult },
      }),
    }),
    getTestResultsByEmpresa: builder.query({
      query: (companyCode) => ({
        url: `/resultado/empresa/${companyCode}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSendTestResultMutation, useGetTestResultsByEmpresaQuery } = testApiSlice;
