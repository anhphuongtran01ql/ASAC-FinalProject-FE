import { baseApi } from "./baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginApiMutation } = loginApi;
