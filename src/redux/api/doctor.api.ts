import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctors],
    }),
    getAllDoctors: build.query({
      query: (args: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.doctors],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctors],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
} = doctorApi;
