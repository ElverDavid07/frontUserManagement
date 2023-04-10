import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiSlice = createApi({
 reducerPath: "api",
 baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:3004",
 }),
 endpoints: (builder) => ({
  GetDataUser: builder.query({
   query: (id: string) => `/api/user/${id}`,
  }),
  RegisterNewUser: builder.mutation({
   query: (data) => ({
    url: "/auth/register",
    method: "POST",
    body: data,
   }),
  }),
  LoginUser: builder.mutation({
   query: (data) => ({
    url: "/auth/register",
    method: "POST",
    body: data,
   }),
  }),
  CloseSession: builder.mutation({
   query: () => ({
    url: "/auth/logout",
    credentials: "include",
    method: "POST",
   }),
  }),
 }),
});

export const {
 useGetDataUserQuery,
 useRegisterNewUserMutation,
 useCloseSessionMutation,
 useLoginUserMutation,
} = ApiSlice;
export { ApiSlice };
