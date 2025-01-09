import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout, AuthState } from "../../services/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      // TODO Enable authentication with token
      // headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("Sending refresh token");
    try {
      // send refresh token to get new access token
      const refreshResult = await baseQuery("/refresh", api, extraOptions);
      console.log(refreshResult);
      if (refreshResult?.data) {
        const user = (api.getState() as any).auth.user;
        //store the new token
        api.dispatch(setCredentials({ user, token: (refreshResult.data as AuthState).token }));
        //retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});

// export const { useQuery, useMutation, useLazyQuery } = apiSlice;
