import { baseApi } from "./baseApi";

export const specialtyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
});

export const { useCreateSpecialtyMutation } = specialtyApi;
