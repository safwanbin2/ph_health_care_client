"use client";

import PHForm from "@/components/form/PHForm/PHForm";
import PHInput from "@/components/form/PHForm/PHInput";
import PHSelectInput from "@/components/form/PHForm/PHSelectInput";
import PHFullScreenModal from "@/components/Modal/PHModal/PHFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctor.api";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Padding } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const createDoctorValidationSchema = z.object({
  password: z.string().min(6, "Can not be less than 6 characters"),
  doctor: z.object({
    name: z.string().min(1, "Name can not be empty"),
    email: z.string().email("Email is not valid"),
    contactNumber: z
      .string()
      .min(11, "Can not be less than 11 character")
      .max(11, "Can not be more than 11 character"),
    address: z.string().min(1, "Enter an address"),
    apointmentFee: z.string().min(1, "Enter a valid amount"),
    currentWorkingPlace: z.string().min(1, "Enter a valid working place"),
    designation: z.string().min(1, "Enter a valid designation"),
    registrationNumber: z.string().min(1, "Enter a valid registration number"),
    qualification: z.string().min(1, "Enter a valid qualification"),
    gender: z.enum(["MALE", "FEMALE"], { message: "Enter a valid gender" }),
    experience: z.string().min(1, "Enter valid experince"),
  }),
});

const defaultValues = {
  password: "",
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    apointmentFee: "",
    currentWorkingPlace: "",
    designation: "",
    registrationNumber: "",
    qualification: "",
    gender: "",
    experience: "",
  },
};

type TProps = {
  open: boolean;
  setOpen: any;
};

const CreateDoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const handleCreateDoctor = async (values: FieldValues) => {
    values.doctor.apointmentFee = Number(values?.doctor?.apointmentFee);
    values.doctor.experience = Number(values?.doctor?.experience);

    const data = modifyPayload(values);
    try {
      const res = await createDoctor(data).unwrap();
      if (!res?.success) throw new Error(res?.message);
      toast.success(res?.message);
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create Doctor">
      <PHForm
        onSubmit={handleCreateDoctor}
        resolver={zodResolver(createDoctorValidationSchema)}
        defaultValues={defaultValues}
      >
        <Box
          sx={{
            padding: 4,
          }}
        >
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.name"
                label="Doctor Name"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.email"
                label="Email"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="password"
                label="Password"
                size="small"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.contactNumber"
                label="Contact Number"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.address"
                label="Address"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.apointmentFee"
                label="Appointment Fee"
                size="small"
                fullWidth
                type="number"
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.currentWorkingPlace"
                label="Working Place"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.designation"
                label="Designation"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.registrationNumber"
                label="Registration Number"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.qualification"
                label="Qualification"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHSelectInput
                name="doctor.gender"
                label="Gender"
                size="small"
                fullWidth={true}
                items={["MALE", "FEMALE"]}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <PHInput
                name="doctor.experience"
                label="Experience"
                size="small"
                fullWidth
                type="number"
              />
            </Grid>
          </Grid>
          <Stack alignItems="end">
            <Button
              type="submit"
              sx={{
                mt: 3,
              }}
            >
              Create
            </Button>
          </Stack>
        </Box>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default CreateDoctorModal;
