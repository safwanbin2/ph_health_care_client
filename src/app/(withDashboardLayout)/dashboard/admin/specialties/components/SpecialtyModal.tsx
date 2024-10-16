import PHFileUploader from "@/components/form/PHForm/PHFileUploader";
import PHForm from "@/components/form/PHForm/PHForm";
import PHInput from "@/components/form/PHForm/PHInput";
import PHModal from "@/components/Modal/PHModal/PHModal";
import { Button, Grid, TextField } from "@mui/material";
import React, { Dispatch } from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <>
      <PHModal open={open} setOpen={setOpen} title="Create New Speciality">
        <PHForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput
                name="title"
                label="Specialty Title"
                fullWidth={true}
                required={true}
                size="small"
                type="text"
              />
            </Grid>
            <Grid item md={6}>
              <PHFileUploader name="file" label="Upload a icon" />
            </Grid>
            <Button
              type="submit"
              sx={{
                margin: "16px 0 0 16px",
              }}
            >
              Create
            </Button>
          </Grid>
        </PHForm>
      </PHModal>
    </>
  );
};

export default SpecialtyModal;
