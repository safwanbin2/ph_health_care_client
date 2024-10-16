import { tagTypes } from "../tagTypes";
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
      invalidatesTags: [tagTypes.specialties],
    }),
    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation, useGetAllSpecialtiesQuery } =
  specialtyApi;
